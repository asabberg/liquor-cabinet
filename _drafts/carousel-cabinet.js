// carousel-cabinet.js - Interactive 3D swipeable carousel interface for drinksData

(function () {
    const categoriesEl = document.getElementById('categories');
    const subcategoriesEl = document.getElementById('subcategories');
    const subcategories2El = document.getElementById('subcategories2');
    const headingEl = document.getElementById('tipples-heading');
    const counterEl = document.getElementById('carousel-counter');
    const stageEl = document.getElementById('carousel-stage');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dotsEl = document.getElementById('carousel-dots');
    const scrubberEl = document.getElementById('carousel-scrubber');
    const hardcoreBtn = document.getElementById('hardcore-btn');
    const retiredBtn = document.getElementById('retired-btn');

    let currentDrinks = [];
    let activeIndex = 0;
    let cardNodes = [];

    // Pointer / touch drag state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragDeltaX = 0;
    let dragLockedHorizontal = false;
    let wheelCooldown = false;

    const MAX_DOTS = 18;

    function formatLabel(key) {
        const labels = {
            whiskey: 'Whiskey',
            gin: 'Gin',
            others: 'Others',
            amaro: 'Amaro et al.',
            new: 'Recent Acquisitions',
            retired: 'Retired Friends',
            restofworld: 'Rest of World',
            americansinglemalt: 'American Single Malt'
        };
        if (labels[key]) return labels[key];
        return key.charAt(0).toUpperCase() + key.slice(1);
    }

    function clearActiveButtons(scopeSelector) {
        const selector = scopeSelector || '.category-btn, .subcategory-btn, .subcategory2-btn, #hardcore-btn, #retired-btn';
        document.querySelectorAll(selector).forEach(btn => btn.classList.remove('active-btn'));
    }

    function setActiveInContainer(container, btn) {
        container.querySelectorAll('button').forEach(b => b.classList.remove('active-btn'));
        if (btn) btn.classList.add('active-btn');
    }

    function showSubcategories(category, clickedBtn) {
        clearActiveButtons();
        if (clickedBtn) clickedBtn.classList.add('active-btn');

        subcategoriesEl.innerHTML = '';
        subcategories2El.innerHTML = '';

        if (!drinksData || !drinksData[category]) {
            loadCarousel([], formatLabel(category));
            return;
        }

        let subcategories = Object.keys(drinksData[category]);
        if (category === 'whiskey') {
            subcategories = subcategories.filter(sub => sub !== 'unicorns');
        }

        if (subcategories.length === 1) {
            const sub = subcategories[0];
            loadCarousel(drinksData[category][sub] || [], formatLabel(category));
            return;
        }

        subcategories.forEach((subcategory, idx) => {
            const button = document.createElement('button');
            button.className = 'subcategory-btn';
            button.textContent = formatLabel(subcategory);
            button.addEventListener('click', () => {
                setActiveInContainer(subcategoriesEl, button);
                if (category === 'whiskey') {
                    showNestedSubcategories(category, subcategory);
                } else {
                    subcategories2El.innerHTML = '';
                    loadCarousel(drinksData[category][subcategory] || [], formatLabel(subcategory));
                }
            });
            subcategoriesEl.appendChild(button);

            // Auto-select first subcategory so the carousel is immediately populated
            if (idx === 0) {
                button.classList.add('active-btn');
                if (category === 'whiskey') {
                    showNestedSubcategories(category, subcategory);
                } else {
                    loadCarousel(drinksData[category][subcategory] || [], formatLabel(subcategory));
                }
            }
        });
    }

    function showNestedSubcategories(category, subcategory) {
        subcategories2El.innerHTML = '';

        if (!drinksData[category] || !drinksData[category][subcategory]) {
            loadCarousel([], formatLabel(subcategory));
            return;
        }

        const nestedSubcategories = Object.keys(drinksData[category][subcategory]);
        if (nestedSubcategories.length === 1) {
            const nested = nestedSubcategories[0];
            loadCarousel(drinksData[category][subcategory][nested] || [], formatLabel(subcategory));
            return;
        }

        nestedSubcategories.forEach((nested, idx) => {
            const button = document.createElement('button');
            button.className = 'subcategory2-btn';
            button.textContent = formatLabel(nested);
            button.addEventListener('click', () => {
                setActiveInContainer(subcategories2El, button);
                loadCarousel(drinksData[category][subcategory][nested] || [], formatLabel(nested));
            });
            subcategories2El.appendChild(button);

            if (idx === 0) {
                button.classList.add('active-btn');
                loadCarousel(drinksData[category][subcategory][nested] || [], formatLabel(nested));
            }
        });
    }

    function getDrinkBadgeIcons(drink, title) {
        const icons = [];
        const cask = (drink.cask || '').trim().toLowerCase();
        const caskMap = {
            'beer': { file: 'beer.png', label: 'Beer Cask' },
            'dessert wine': { file: 'dessert_wine_cask.png', label: 'Dessert Wine Cask' },
            'wine': { file: 'wine_cask.png', label: 'Wine Cask' },
            'mizunara': { file: 'mizunara.png', label: 'Mizunara Cask' },
            'toasted': { file: 'toasted.png', label: 'Toasted Cask' },
            'exotic': { file: 'exotic_cask.png', label: 'Exotic Cask' }
        };
        if (caskMap[cask]) icons.push(caskMap[cask]);

        if ((drink.peated || '').trim().toLowerCase() === 'yes') {
            icons.push({ file: 'peat_monster.png', label: 'Peated' });
        }

        const abv = parseFloat((drink.ABV || '').replace(/[^0-9.]/g, ''));
        if (!isNaN(abv) && abv > 60) {
            icons.push({ file: 'high_octane.png', label: 'High Octane (>60% ABV)' });
        }

        const combinedText = `${drink.bottle || ''} ${drink.notes || ''}`;
        if (/single\s*cask|cask\s*no\.?/i.test(combinedText)) {
            icons.push({ file: 'single_cask.png', label: 'Single Cask' });
        }

        const uniqueGrainVal = (drink.uniqueGrain || drink['unique grain'] || '').trim().toLowerCase();
        if (uniqueGrainVal === 'yes') {
            icons.push({ file: 'unique_grain.png', label: 'Unique Grain' });
        }

        if ((drink.travel || drink.vacation || '').trim().toLowerCase() === 'yes') {
            icons.push({ file: 'vacation.png', label: 'Travel' });
        }

        if ((drink.peculiar || '').trim().toLowerCase() === 'yes') {
            icons.push({ file: 'peculiar_potable.png', label: 'Peculiar Potable' });
        }

        if (title && /unicorn/i.test(title)) {
            icons.push({ file: 'unicorn.png', label: 'Unicorn' });
        }

        return icons;
    }

    function createCardElement(drink, index, title) {
        const card = document.createElement('article');
        card.className = 'carousel-card';
        card.dataset.index = index;

        const ageVal = drink.age || drink.Age || '';
        const badges = [];
        if (drink.ABV) {
            badges.push(`<span class="card-badge">ABV ${drink.ABV}</span>`);
        }
        if (ageVal && ageVal !== 'NAS') {
            badges.push(`<span class="card-badge">${ageVal}</span>`);
        }

        const iconBadges = getDrinkBadgeIcons(drink, title);
        const iconBadgesHtml = iconBadges.length
            ? `<div class="badge-icon-row">${iconBadges.map(b => `<img src="../images/Badges/${b.file}" alt="${b.label}" title="${b.label}">`).join('')}</div>`
            : '';

        let bodyHtml = '';
        if (drink.occasion) {
            bodyHtml += `<p class="card-meta-line"><strong>Occasion:</strong> ${drink.occasion}</p>`;
        }
        if (drink.retired) {
            bodyHtml += `<p class="card-meta-line"><strong>Retired:</strong> ${drink.retired}</p>`;
        }

        card.innerHTML = `
            <div class="card-top">
                <div class="card-distillery">${drink.distillery || ''}</div>
                <h4 class="card-bottle">${drink.bottle || ''}</h4>
                <div class="card-divider"></div>
                <div class="card-region">${drink.region || ''}</div>
                <div class="card-badges">${badges.join('')}</div>
            </div>
            <div class="card-body">
                ${bodyHtml}
                ${iconBadgesHtml}
            </div>
        `;

        card.addEventListener('click', () => {
            if (Math.abs(dragDeltaX) > 8) return;
            if (index !== activeIndex) {
                goToIndex(index);
            }
        });

        return card;
    }

    function loadCarousel(drinks, title) {
        currentDrinks = drinks || [];
        activeIndex = 0;
        headingEl.textContent = title || 'Tipples';

        stageEl.innerHTML = '';
        cardNodes = [];

        if (currentDrinks.length === 0) {
            counterEl.textContent = '';
            stageEl.innerHTML = '<div class="card-empty">No bottles found in this category.</div>';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            dotsEl.classList.add('is-hidden');
            scrubberEl.classList.add('is-hidden');
            return;
        }

        currentDrinks.forEach((drink, idx) => {
            const card = createCardElement(drink, idx, title);
            stageEl.appendChild(card);
            cardNodes.push(card);
        });

        const hasMultiple = currentDrinks.length > 1;
        prevBtn.disabled = !hasMultiple;
        nextBtn.disabled = !hasMultiple;

        buildIndicators();
        renderPositions(0);
    }

    function buildIndicators() {
        const count = currentDrinks.length;
        dotsEl.innerHTML = '';

        if (count <= 1) {
            dotsEl.classList.add('is-hidden');
            scrubberEl.classList.add('is-hidden');
            return;
        }

        if (count <= MAX_DOTS) {
            dotsEl.classList.remove('is-hidden');
            scrubberEl.classList.add('is-hidden');
            for (let i = 0; i < count; i++) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Go to bottle ${i + 1}`);
                dot.addEventListener('click', () => goToIndex(i));
                dotsEl.appendChild(dot);
            }
        } else {
            dotsEl.classList.add('is-hidden');
            scrubberEl.classList.remove('is-hidden');
            scrubberEl.min = 0;
            scrubberEl.max = count - 1;
            scrubberEl.value = activeIndex;
        }
    }

    // Shortest signed circular distance between two indices
    function circularOffset(index, center, total) {
        let diff = index - center;
        const half = total / 2;
        if (diff > half) diff -= total;
        if (diff < -half) diff += total;
        return diff;
    }

    function renderPositions(dragPx) {
        const total = currentDrinks.length;
        if (total === 0) return;

        const isMobile = window.innerWidth <= 640;
        const stepX = isMobile ? 180 : 250;
        const dragFraction = dragPx / stepX;

        cardNodes.forEach((card, idx) => {
            const rawOffset = circularOffset(idx, activeIndex, total);
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

        counterEl.textContent = `${activeIndex + 1} of ${total}`;

        if (total <= MAX_DOTS) {
            dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('is-active', i === activeIndex);
            });
        } else {
            scrubberEl.value = activeIndex;
        }
    }

    function step(delta) {
        const total = currentDrinks.length;
        if (total <= 1) return;
        activeIndex = (activeIndex + delta + total) % total;
        renderPositions(0);
    }

    function goToIndex(targetIdx) {
        const total = currentDrinks.length;
        if (total === 0) return;
        activeIndex = ((targetIdx % total) + total) % total;
        renderPositions(0);
    }

    // Button & scrubber events
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));

    scrubberEl.addEventListener('input', (e) => {
        goToIndex(parseInt(e.target.value, 10));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
        }
    });

    // Pointer / touch drag to rotate
    function onPointerDown(clientX, clientY) {
        if (currentDrinks.length <= 1) return;
        isDragging = true;
        dragStartX = clientX;
        dragStartY = clientY;
        dragDeltaX = 0;
        dragLockedHorizontal = false;
        stageEl.classList.add('is-dragging');
    }

    function onPointerMove(clientX, clientY, preventDefaultFn) {
        if (!isDragging) return;
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;

        if (!dragLockedHorizontal) {
            if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
                dragLockedHorizontal = true;
            } else if (Math.abs(dy) > 12) {
                // User is scrolling vertically; cancel drag
                isDragging = false;
                stageEl.classList.remove('is-dragging');
                renderPositions(0);
                return;
            }
        }

        if (dragLockedHorizontal) {
            if (preventDefaultFn) preventDefaultFn();
            dragDeltaX = dx;
            renderPositions(dragDeltaX);
        }
    }

    function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;
        stageEl.classList.remove('is-dragging');

        const threshold = 48;
        if (dragDeltaX <= -threshold) {
            step(1);
        } else if (dragDeltaX >= threshold) {
            step(-1);
        } else {
            renderPositions(0);
        }

        // Reset dragDeltaX on next tick so click handler can distinguish drag vs tap
        setTimeout(() => {
            dragDeltaX = 0;
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

    // Trackpad horizontal swipe / shift+wheel
    stageEl.addEventListener('wheel', (e) => {
        const horiz = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
        if (Math.abs(horiz) < 18) return;
        e.preventDefault();
        if (wheelCooldown) return;
        wheelCooldown = true;
        step(horiz > 0 ? 1 : -1);
        setTimeout(() => { wheelCooldown = false; }, 260);
    }, { passive: false });

    window.addEventListener('resize', () => renderPositions(0));

    // Wire up category buttons
    categoriesEl.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSubcategories(btn.dataset.category, btn);
        });
    });

    hardcoreBtn.addEventListener('click', () => {
        clearActiveButtons();
        hardcoreBtn.classList.add('active-btn');
        subcategoriesEl.innerHTML = '';
        subcategories2El.innerHTML = '';
        const unicorns = (drinksData && drinksData.whiskey && drinksData.whiskey.unicorns && drinksData.whiskey.unicorns.unicorn) || [];
        loadCarousel(unicorns, 'Unicorns & Rare Reserves');
    });

    retiredBtn.addEventListener('click', () => {
        showSubcategories('retired', retiredBtn);
    });

    // Initialize with Whiskey -> American -> Bourbon so the carousel is ready immediately
    const initialBtn = categoriesEl.querySelector('[data-category="whiskey"]');
    if (initialBtn) {
        showSubcategories('whiskey', initialBtn);
    }
})();
