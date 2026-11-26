// app.js - UI logic for Stave whiskey selector with 3D swipeable carousel

function parseAbv(abvStr) {
    if (typeof abvStr !== 'string') return NaN;
    return parseFloat(abvStr.replace(/[^0-9\.]/g, '')) || NaN;
}

function flattenWhiskeys(data) {
    const list = [];
    for (const type in data) {
        const sub = data[type];
        if (Array.isArray(sub)) {
            sub.forEach((item) => {
                const category = type;
                const stamps = deriveStamps(item, category);
                list.push({ ...item, stamps, category });
            });
        } else if (typeof sub === 'object') {
            for (const subType in sub) {
                const arr = sub[subType];
                if (Array.isArray(arr)) {
                    arr.forEach((item) => {
                        const category = type + '.' + subType;
                        const stamps = deriveStamps(item, category);
                        list.push({ ...item, stamps, category });
                    });
                }
            }
        }
    }
    return list;
}

function deriveStamps(item, category) {
    const stamps = [];
    const style = category ? category.split('.').pop() : '';
    if (style === 'americansinglemalt') {
        stamps.push('asm.png');
    }
    if (item.peated && item.peated.trim().toLowerCase() === 'yes') {
        stamps.push('smokey.png');
    }
    if (style === 'unicorn') {
        stamps.push('unicorn.png');
    }
    return stamps.slice(0, 4);
}

function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function formatStyleLabel(s) {
    if (typeof s !== 'string' || !s.length) return s;
    if (s.toLowerCase() === 'americansinglemalt') {
        return 'American Single Malt';
    }
    let human = s.replace(/([a-z])([A-Z])/g, '$1 $2');
    human = human.replace(/[_\-]/g, ' ');
    human = human.replace(/\b\w/g, c => c.toUpperCase());
    return human;
}

function buildButtonList(containerId, options, selectionSet, onToggle, formatter) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = formatter ? formatter(opt) : opt;
        btn.dataset.value = opt;
        if (selectionSet.has(opt)) {
            btn.classList.add('selected');
        }
        btn.addEventListener('click', () => {
            const val = btn.dataset.value;
            if (selectionSet.has(val)) {
                selectionSet.delete(val);
                btn.classList.remove('selected');
            } else {
                selectionSet.add(val);
                btn.classList.add('selected');
            }
            if (onToggle) onToggle();
            btn.blur();
        });
        container.appendChild(btn);
    });
}

// Filter selection state
let selectedRegions = new Set();
let selectedStyles = new Set();
let selectedDistilleries = new Set();
let selectedCasks = new Set();
let smokeyFilter = null; // null, true, or false
let selectedAbvRange = null; // null, 'normal', 'hot', 'high'

// Carousel state
const carousel = {
    items: [],
    activeIndex: 0,
    cardNodes: [],
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragDeltaX: 0,
    dragLockedHorizontal: false,
    wheelCooldown: false,
    MAX_DOTS: 18
};

function circularOffset(index, center, total) {
    let diff = index - center;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
}

function renderCarouselPositions(dragPx) {
    const total = carousel.items.length;
    if (total === 0) return;

    const isMobile = window.innerWidth <= 640;
    const stepX = isMobile ? 180 : 250;
    const dragFraction = dragPx / stepX;

    carousel.cardNodes.forEach((card, idx) => {
        const rawOffset = circularOffset(idx, carousel.activeIndex, total);
        const offset = rawOffset + dragFraction;
        const absOffset = Math.abs(offset);

        card.classList.toggle('is-active', rawOffset === 0);
        card.classList.toggle('is-side', rawOffset !== 0 && absOffset <= 2.4);

        if (absOffset > 2.6) {
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
            card.style.zIndex = '0';
            const sign = offset < 0 ? -1 : 1;
            card.style.transform = `translate3d(${sign * stepX * 2.4}px, 0, -340px) rotateY(${-sign * 42}deg) scale(0.62)`;
            return;
        }

        const translateX = offset * stepX;
        const translateZ = -Math.min(absOffset, 2.5) * 125;
        const rotateY = Math.max(-40, Math.min(40, -offset * 22));
        const scale = Math.max(0.68, 1 - absOffset * 0.14);
        const opacity = Math.max(0, 1 - absOffset * 0.36);

        card.style.transform = `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = opacity.toFixed(3);
        card.style.zIndex = String(Math.round(20 - absOffset * 5));
        card.style.pointerEvents = absOffset <= 2.2 ? 'auto' : 'none';
    });

    const counterEl = document.getElementById('carouselCounter');
    if (counterEl) {
        counterEl.textContent = `${carousel.activeIndex + 1} of ${total}`;
    }

    const dotsEl = document.getElementById('carouselDots');
    const scrubberEl = document.getElementById('carouselScrubber');
    if (total <= carousel.MAX_DOTS) {
        dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === carousel.activeIndex);
        });
    } else {
        scrubberEl.value = carousel.activeIndex;
    }
}

function stepCarousel(delta) {
    const total = carousel.items.length;
    if (total <= 1) return;
    carousel.activeIndex = (carousel.activeIndex + delta + total) % total;
    renderCarouselPositions(0);
}

function goToCarouselIndex(targetIdx) {
    const total = carousel.items.length;
    if (total === 0) return;
    carousel.activeIndex = ((targetIdx % total) + total) % total;
    renderCarouselPositions(0);
}

function loadCarousel(items) {
    const stageEl = document.getElementById('carouselStage');
    const counterEl = document.getElementById('carouselCounter');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const dotsEl = document.getElementById('carouselDots');
    const scrubberEl = document.getElementById('carouselScrubber');
    const shuffleBtn = document.getElementById('shuffleBtn');

    carousel.items = items || [];
    carousel.activeIndex = 0;
    carousel.cardNodes = [];
    stageEl.innerHTML = '';

    const total = carousel.items.length;
    if (total === 0) {
        counterEl.textContent = '0 matches';
        stageEl.innerHTML = '<div class="card-empty">No bottles match your current filters. Try loosening a filter!</div>';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        dotsEl.classList.add('hidden');
        scrubberEl.classList.add('hidden');
        if (shuffleBtn) shuffleBtn.classList.add('hidden');
        return;
    }

    if (shuffleBtn) shuffleBtn.classList.toggle('hidden', total <= 1);

    carousel.items.forEach((item, idx) => {
        const card = document.createElement('article');
        card.className = 'carousel-card';

        const ageVal = item.age || item.Age || '';
        const badges = [];
        if (item.ABV) badges.push(`<span class="card-badge">ABV ${item.ABV}</span>`);
        if (ageVal && ageVal !== 'NAS') badges.push(`<span class="card-badge">${ageVal}</span>`);
        if (item.cask) badges.push(`<span class="card-badge badge-cask">${item.cask} Cask</span>`);
        if (item.peated && item.peated.trim().toLowerCase() === 'yes') {
            badges.push(`<span class="card-badge badge-smokey">Peated</span>`);
        }

        let bodyHtml = '';
        if (item.notes) bodyHtml += `<p class="card-notes">&ldquo;${item.notes}&rdquo;</p>`;
        if (item.occasion) bodyHtml += `<p class="card-meta-line"><strong>Occasion:</strong> ${item.occasion}</p>`;

        let stampsHtml = '';
        if (item.stamps && item.stamps.length) {
            const imgs = item.stamps
                .filter(Boolean)
                .map(name => `<img src="images/${name}" alt="${name}">`)
                .join('');
            stampsHtml = `<div class="stamp-row">${imgs}</div>`;
        }

        card.innerHTML = `
            <div class="card-top">
                <div class="card-distillery">${item.distillery || ''}</div>
                <h4 class="card-bottle">${item.bottle || ''}</h4>
                <div class="card-divider"></div>
                <div class="card-region">${item.region || ''}</div>
                <div class="card-badges">${badges.join('')}</div>
            </div>
            <div class="card-body">
                ${bodyHtml}
                ${stampsHtml}
            </div>
        `;

        card.addEventListener('click', () => {
            if (Math.abs(carousel.dragDeltaX) > 8) return;
            if (idx !== carousel.activeIndex) {
                goToCarouselIndex(idx);
            }
        });

        stageEl.appendChild(card);
        carousel.cardNodes.push(card);
    });

    const hasMultiple = total > 1;
    prevBtn.disabled = !hasMultiple;
    nextBtn.disabled = !hasMultiple;

    dotsEl.innerHTML = '';
    if (total <= 1) {
        dotsEl.classList.add('hidden');
        scrubberEl.classList.add('hidden');
    } else if (total <= carousel.MAX_DOTS) {
        dotsEl.classList.remove('hidden');
        scrubberEl.classList.add('hidden');
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Go to bottle ${i + 1}`);
            dot.addEventListener('click', () => goToCarouselIndex(i));
            dotsEl.appendChild(dot);
        }
    } else {
        dotsEl.classList.add('hidden');
        scrubberEl.classList.remove('hidden');
        scrubberEl.min = 0;
        scrubberEl.max = total - 1;
        scrubberEl.value = 0;
    }

    renderCarouselPositions(0);
}

window.addEventListener('DOMContentLoaded', () => {
    let sourceData;
    if (typeof drinksData !== 'undefined' && drinksData.whiskey) {
        sourceData = drinksData.whiskey;
    } else if (typeof whiskey !== 'undefined') {
        sourceData = whiskey;
    } else {
        console.error('No whiskey data available!');
        sourceData = {};
    }
    const allWhiskeys = flattenWhiskeys(sourceData);

    const regions = [...new Set(allWhiskeys.map(w => w.region))].filter(Boolean).sort();
    const distilleries = [...new Set(allWhiskeys.map(w => w.distillery))].filter(Boolean).sort();
    const styles = [...new Set(allWhiskeys.map(w => w.category ? w.category.split('.').pop() : ''))].filter(Boolean).sort();
    const casks = [...new Set(allWhiskeys.map(w => w.cask))].filter(Boolean).sort();

    const stylesByRegion = {};
    allWhiskeys.forEach(w => {
        const r = w.region;
        const s = w.category ? w.category.split('.').pop() : '';
        if (r && s) {
            stylesByRegion[r] = stylesByRegion[r] || new Set();
            stylesByRegion[r].add(s);
        }
    });

    function getFilteredWhiskeys() {
        return allWhiskeys.filter((w) => {
            if (selectedRegions.size && !selectedRegions.has(w.region)) return false;
            if (selectedStyles.size) {
                const style = w.category ? w.category.split('.').pop() : '';
                if (!selectedStyles.has(style)) return false;
            }
            if (selectedDistilleries.size && !selectedDistilleries.has(w.distillery)) return false;
            if (selectedCasks.size && !selectedCasks.has(w.cask)) return false;
            if (smokeyFilter !== null) {
                const hasPeated = w.peated && w.peated.trim().toLowerCase() === 'yes';
                if (smokeyFilter && !hasPeated) return false;
                if (!smokeyFilter && hasPeated) return false;
            }
            const abv = parseAbv(w.ABV);
            if (!isNaN(abv) && selectedAbvRange) {
                switch (selectedAbvRange) {
                    case 'normal':
                        if (abv >= 50) return false;
                        break;
                    case 'hot':
                        if (abv < 50 || abv > 60) return false;
                        break;
                    case 'high':
                        if (abv <= 60) return false;
                        break;
                }
            }
            return true;
        });
    }

    function updateMatchButtonLabel() {
        const count = getFilteredWhiskeys().length;
        const btn = document.getElementById('showMatchesBtn');
        if (btn) {
            btn.textContent = `Show Matches (${count})`;
        }
    }

    function refreshStyleButtons() {
        let availableStyles;
        if (selectedRegions.size === 0) {
            availableStyles = styles;
        } else {
            const set = new Set();
            selectedRegions.forEach(r => {
                (stylesByRegion[r] || []).forEach(s => set.add(s));
            });
            availableStyles = Array.from(set).sort();
        }
        buildButtonList('styleButtons', availableStyles, selectedStyles, updateMatchButtonLabel, formatStyleLabel);
        updateMatchButtonLabel();
    }

    buildButtonList('regionButtons', regions, selectedRegions, refreshStyleButtons);
    refreshStyleButtons();
    buildButtonList('distilleryButtons', distilleries, selectedDistilleries, updateMatchButtonLabel);
    buildButtonList('caskButtons', casks, selectedCasks, updateMatchButtonLabel);

    // Smokey toggle buttons
    const smokeyYesBtn = document.getElementById('smokeyYes');
    const smokeyNoBtn = document.getElementById('smokeyNo');
    smokeyYesBtn.addEventListener('click', () => {
        if (smokeyFilter === true) {
            smokeyFilter = null;
            smokeyYesBtn.classList.remove('selected');
        } else {
            smokeyFilter = true;
            smokeyYesBtn.classList.add('selected');
            smokeyNoBtn.classList.remove('selected');
        }
        updateMatchButtonLabel();
    });
    smokeyNoBtn.addEventListener('click', () => {
        if (smokeyFilter === false) {
            smokeyFilter = null;
            smokeyNoBtn.classList.remove('selected');
        } else {
            smokeyFilter = false;
            smokeyNoBtn.classList.add('selected');
            smokeyYesBtn.classList.remove('selected');
        }
        updateMatchButtonLabel();
    });

    // ABV range buttons
    const abvBtns = document.querySelectorAll('#abvButtons button');
    abvBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const range = btn.dataset.range;
            if (selectedAbvRange === range) {
                selectedAbvRange = null;
                btn.classList.remove('selected');
            } else {
                selectedAbvRange = range;
                abvBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            }
            updateMatchButtonLabel();
        });
    });

    // Clear filters
    document.getElementById('clearFiltersBtn').addEventListener('click', () => {
        selectedRegions.clear();
        selectedStyles.clear();
        selectedDistilleries.clear();
        selectedCasks.clear();
        smokeyFilter = null;
        selectedAbvRange = null;
        document.querySelectorAll('#preferences button.selected').forEach(b => b.classList.remove('selected'));
        refreshStyleButtons();
        updateMatchButtonLabel();
    });

    // Form submit -> show carousel of all matching options
    const preferencesEl = document.getElementById('preferences');
    const carouselSectionEl = document.getElementById('carouselSection');

    document.getElementById('prefForm').addEventListener('submit', (ev) => {
        ev.preventDefault();
        const filtered = getFilteredWhiskeys();
        preferencesEl.classList.add('hidden');
        carouselSectionEl.classList.remove('hidden');
        loadCarousel(filtered);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('backToFiltersBtn').addEventListener('click', () => {
        carouselSectionEl.classList.add('hidden');
        preferencesEl.classList.remove('hidden');
    });

    document.getElementById('shuffleBtn').addEventListener('click', () => {
        if (carousel.items.length > 1) {
            loadCarousel(shuffleArray(carousel.items));
        }
    });

    // Carousel controls
    document.getElementById('carouselPrevBtn').addEventListener('click', () => stepCarousel(-1));
    document.getElementById('carouselNextBtn').addEventListener('click', () => stepCarousel(1));
    document.getElementById('carouselScrubber').addEventListener('input', (e) => {
        goToCarouselIndex(parseInt(e.target.value, 10));
    });

    document.addEventListener('keydown', (e) => {
        if (carouselSectionEl.classList.contains('hidden')) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            stepCarousel(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            stepCarousel(1);
        }
    });

    // Drag / touch swipe support
    const stageEl = document.getElementById('carouselStage');

    function onPointerDown(clientX, clientY) {
        if (carousel.items.length <= 1) return;
        carousel.isDragging = true;
        carousel.dragStartX = clientX;
        carousel.dragStartY = clientY;
        carousel.dragDeltaX = 0;
        carousel.dragLockedHorizontal = false;
        stageEl.classList.add('is-dragging');
    }

    function onPointerMove(clientX, clientY, preventDefaultFn) {
        if (!carousel.isDragging) return;
        const dx = clientX - carousel.dragStartX;
        const dy = clientY - carousel.dragStartY;

        if (!carousel.dragLockedHorizontal) {
            if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
                carousel.dragLockedHorizontal = true;
            } else if (Math.abs(dy) > 12) {
                carousel.isDragging = false;
                stageEl.classList.remove('is-dragging');
                renderCarouselPositions(0);
                return;
            }
        }

        if (carousel.dragLockedHorizontal) {
            if (preventDefaultFn) preventDefaultFn();
            carousel.dragDeltaX = dx;
            renderCarouselPositions(carousel.dragDeltaX);
        }
    }

    function onPointerUp() {
        if (!carousel.isDragging) return;
        carousel.isDragging = false;
        stageEl.classList.remove('is-dragging');

        const threshold = 48;
        if (carousel.dragDeltaX <= -threshold) {
            stepCarousel(1);
        } else if (carousel.dragDeltaX >= threshold) {
            stepCarousel(-1);
        } else {
            renderCarouselPositions(0);
        }

        setTimeout(() => {
            carousel.dragDeltaX = 0;
        }, 0);
    }

    stageEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        onPointerDown(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onPointerUp);

    stageEl.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    stageEl.addEventListener('touchmove', (e) => {
        if (e.touches.length !== 1) return;
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY, () => e.preventDefault());
    }, { passive: false });

    stageEl.addEventListener('touchend', onPointerUp);
    stageEl.addEventListener('touchcancel', onPointerUp);

    stageEl.addEventListener('wheel', (e) => {
        const horiz = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
        if (Math.abs(horiz) < 18) return;
        e.preventDefault();
        if (carousel.wheelCooldown) return;
        carousel.wheelCooldown = true;
        stepCarousel(horiz > 0 ? 1 : -1);
        setTimeout(() => { carousel.wheelCooldown = false; }, 260);
    }, { passive: false });

    window.addEventListener('resize', () => {
        if (!carouselSectionEl.classList.contains('hidden')) {
            renderCarouselPositions(0);
        }
    });

    updateMatchButtonLabel();
});
