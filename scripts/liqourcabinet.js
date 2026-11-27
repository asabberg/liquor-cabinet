function showSubcategories(category) {
    hideCarousel();
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = ''; // Clear the current list

    const subcategoriesDiv = document.getElementById('subcategories');
    subcategoriesDiv.innerHTML = ''; // Clear existing subcategory buttons

    const subcategoriesDiv2 = document.getElementById('subcategories2');
    subcategoriesDiv2.innerHTML = ''; // Clear existing subcategory buttons

    if (drinksData[category]) {
        let subcategories = Object.keys(drinksData[category]);
        
        // Hide unicorns from whiskey category
        if (category === 'whiskey') {
            subcategories = subcategories.filter(sub => sub !== 'unicorns');
        }
        
        if (subcategories.length === 1) {
            if (category === 'new' && document.getElementById('drinks-carousel')) {
                showCarousel(drinksData[category][subcategories[0]] || []);
            } else {
                showDrinks(category, subcategories[0]);
            }
            
        } else subcategories.forEach(subcategory => {
            const button = document.createElement('button');
            button.classList.add('subcategory-btn'); // <-- Add this line
            if (subcategory === 'restofworld') {
                button.textContent = 'Rest of World';
            } else{
                button.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
            }
            button.onclick = () => {
                if (category === 'whiskey') {
                    showNestedSubcategories(category, subcategory);
                } else {
                    showDrinks(category, subcategory);
                }
            };
            subcategoriesDiv.appendChild(button);
    });
    }
}

function showNestedSubcategories(category, subcategory) {
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = ''; // Clear the current list

    const subcategoriesDiv2 = document.getElementById('subcategories2');
    subcategoriesDiv2.innerHTML = ''; // Clear existing subcategory buttons

    if (drinksData[category] && drinksData[category][subcategory]) {
        const nestedSubcategories = Object.keys(drinksData[category][subcategory]);

        if (nestedSubcategories.length === 1) {
            showDrinks(category, subcategory, nestedSubcategories[0]);
        } else {
            nestedSubcategories.forEach(nestedSubcategory => {
                const button = document.createElement('button');
                button.classList.add('subcategory2-btn'); // <-- Add this line
                if (nestedSubcategory === 'americansinglemalt') {
                    button.textContent = 'American Single Malt';
                }
                else{
                    button.textContent = nestedSubcategory.charAt(0).toUpperCase() + nestedSubcategory.slice(1);
                }
                button.onclick = () => showDrinks(category, subcategory, nestedSubcategory);
                subcategoriesDiv2.appendChild(button);
            });
        }
    }
}

function showDrinks(category, subcategory, nestedSubcategory = null, directDrinks = null) {
    hideCarousel();
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = ''; // Clear the current list

    let drinks = [];

    if (directDrinks) {
        drinks = directDrinks;
    } else if (nestedSubcategory) {
        drinks = drinksData[category][subcategory][nestedSubcategory] || [];
    } else {
        drinks = drinksData[category][subcategory] || [];
    }

    if (drinks.length > 0) {
        drinks.forEach(drink => {
            const listItem = document.createElement('li');
            
            let drinkDetails = `
                <strong>${drink.bottle}</strong> by ${drink.distillery} <br>
                <em>Region:</em> ${drink.region} <br>
                <em>ABV:</em> ${drink.ABV} <br>
            `;

            // Add Age if present
            if (drink.age && drink.age !== 'NAS') {
                drinkDetails += `<em>Age:</em> ${drink.age} <br>`;
            }

            // Add Notes if present
            if (drink.notes) {
                drinkDetails += `<em>Notes:</em> ${drink.notes} <br>`;
            }

            // Add Occasion if present
            if (drink.occasion) {
                drinkDetails += `<em>Occasion:</em> ${drink.occasion} <br>`;
            }

            // Add Retired information if present
            if (drink.retired) {
                drinkDetails += `<em>Retired on:</em> ${drink.retired} <br>`;
            }

            listItem.innerHTML = drinkDetails;
            drinksList.appendChild(listItem);
        });
    } else {
        drinksList.innerHTML = '<li>No drinks found for this category.</li>';
    }
}

function setActiveButtonDelegated(containerSelector, buttonSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.addEventListener('click', function(e) {
        const btn = e.target.closest(buttonSelector);
        if (!btn) return;
        // Remove active from all in group
        container.querySelectorAll(buttonSelector).forEach(b => b.classList.remove('active-btn'));
        // Add active to clicked
        btn.classList.add('active-btn');
    });
}

function clearAllActiveButtons() {
    document.querySelectorAll('.category-btn, .subcategory-btn, .subcategory2-btn, #hardcore-btn, #retired-btn')
        .forEach(btn => btn.classList.remove('active-btn'));
}

const hardcoreBtnEl = document.getElementById('hardcore-btn');
if (hardcoreBtnEl) {
    hardcoreBtnEl.addEventListener('click', function() {
        clearAllActiveButtons();
        const drinksList = document.getElementById('drinks-list');
        drinksList.innerHTML = '';
        const subcategoriesDiv = document.getElementById('subcategories');
        subcategoriesDiv.innerHTML = '';
        const subcategoriesDiv2 = document.getElementById('subcategories2');
        subcategoriesDiv2.innerHTML = '';
        showDrinks(null, null, null, drinksData.whiskey.unicorns.unicorn);
    });
}

const retiredBtnEl = document.getElementById('retired-btn');
if (retiredBtnEl) {
    retiredBtnEl.addEventListener('click', function() {
        clearAllActiveButtons();
        this.classList.add('active-btn');
        showSubcategories('retired');
    });
}

// Call this after DOMContentLoaded or at the end of your script:
setActiveButtonDelegated('#categories', '.category-btn');
setActiveButtonDelegated('#subcategories', '.subcategory-btn');
setActiveButtonDelegated('#subcategories2', '.subcategory2-btn');
// If you have a third layer, add another call with the appropriate selectors

// ==========================================================================
// 3D Swipeable Carousel (used for Recent Acquisitions when #drinks-carousel exists)
// ==========================================================================
const carouselState = {
    drinks: [],
    activeIndex: 0,
    cardNodes: [],
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragDeltaX: 0,
    dragLockedHorizontal: false,
    wheelCooldown: false,
    initialized: false,
    MAX_DOTS: 18
};

function hideCarousel() {
    const carouselEl = document.getElementById('drinks-carousel');
    const drinksList = document.getElementById('drinks-list');
    if (carouselEl) carouselEl.classList.add('is-hidden');
    if (drinksList) drinksList.classList.remove('is-hidden');
}

function circularOffset(index, center, total) {
    let diff = index - center;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
}

function renderCarouselPositions(dragPx) {
    const total = carouselState.drinks.length;
    if (total === 0) return;

    const isMobile = window.innerWidth <= 640;
    const stepX = isMobile ? 180 : 250;
    const dragFraction = dragPx / stepX;

    carouselState.cardNodes.forEach((card, idx) => {
        const rawOffset = circularOffset(idx, carouselState.activeIndex, total);
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

    const counterEl = document.getElementById('carousel-counter');
    if (counterEl) {
        counterEl.textContent = `${carouselState.activeIndex + 1} of ${total}`;
    }

    const dotsEl = document.getElementById('carousel-dots');
    const scrubberEl = document.getElementById('carousel-scrubber');
    if (total <= carouselState.MAX_DOTS && dotsEl) {
        dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === carouselState.activeIndex);
        });
    } else if (scrubberEl) {
        scrubberEl.value = carouselState.activeIndex;
    }
}

function stepCarousel(delta) {
    const total = carouselState.drinks.length;
    if (total <= 1) return;
    carouselState.activeIndex = (carouselState.activeIndex + delta + total) % total;
    renderCarouselPositions(0);
}

function goToCarouselIndex(targetIdx) {
    const total = carouselState.drinks.length;
    if (total === 0) return;
    carouselState.activeIndex = ((targetIdx % total) + total) % total;
    renderCarouselPositions(0);
}

function initCarouselListeners() {
    if (carouselState.initialized) return;
    const carouselEl = document.getElementById('drinks-carousel');
    const stageEl = document.getElementById('carousel-stage');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const scrubberEl = document.getElementById('carousel-scrubber');
    if (!carouselEl || !stageEl) return;

    carouselState.initialized = true;

    if (prevBtn) prevBtn.addEventListener('click', () => stepCarousel(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => stepCarousel(1));
    if (scrubberEl) {
        scrubberEl.addEventListener('input', (e) => {
            goToCarouselIndex(parseInt(e.target.value, 10));
        });
    }

    document.addEventListener('keydown', (e) => {
        if (carouselEl.classList.contains('is-hidden')) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            stepCarousel(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            stepCarousel(1);
        }
    });

    function onPointerDown(clientX, clientY) {
        if (carouselState.drinks.length <= 1) return;
        carouselState.isDragging = true;
        carouselState.dragStartX = clientX;
        carouselState.dragStartY = clientY;
        carouselState.dragDeltaX = 0;
        carouselState.dragLockedHorizontal = false;
        stageEl.classList.add('is-dragging');
    }

    function onPointerMove(clientX, clientY, preventDefaultFn) {
        if (!carouselState.isDragging) return;
        const dx = clientX - carouselState.dragStartX;
        const dy = clientY - carouselState.dragStartY;

        if (!carouselState.dragLockedHorizontal) {
            if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
                carouselState.dragLockedHorizontal = true;
            } else if (Math.abs(dy) > 12) {
                carouselState.isDragging = false;
                stageEl.classList.remove('is-dragging');
                renderCarouselPositions(0);
                return;
            }
        }

        if (carouselState.dragLockedHorizontal) {
            if (preventDefaultFn) preventDefaultFn();
            carouselState.dragDeltaX = dx;
            renderCarouselPositions(carouselState.dragDeltaX);
        }
    }

    function onPointerUp() {
        if (!carouselState.isDragging) return;
        carouselState.isDragging = false;
        stageEl.classList.remove('is-dragging');

        const threshold = 48;
        if (carouselState.dragDeltaX <= -threshold) {
            stepCarousel(1);
        } else if (carouselState.dragDeltaX >= threshold) {
            stepCarousel(-1);
        } else {
            renderCarouselPositions(0);
        }

        setTimeout(() => {
            carouselState.dragDeltaX = 0;
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
        if (carouselState.wheelCooldown) return;
        carouselState.wheelCooldown = true;
        stepCarousel(horiz > 0 ? 1 : -1);
        setTimeout(() => { carouselState.wheelCooldown = false; }, 260);
    }, { passive: false });

    window.addEventListener('resize', () => {
        if (!carouselEl.classList.contains('is-hidden')) {
            renderCarouselPositions(0);
        }
    });
}

function getDrinkBadgeIcons(drink, category) {
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

    if (category && /unicorn|hardcore/i.test(category)) {
        icons.push({ file: 'unicorn.png', label: 'Unicorn' });
    }

    return icons;
}

function showCarousel(drinks) {
    const carouselEl = document.getElementById('drinks-carousel');
    const drinksList = document.getElementById('drinks-list');
    const stageEl = document.getElementById('carousel-stage');
    const counterEl = document.getElementById('carousel-counter');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const dotsEl = document.getElementById('carousel-dots');
    const scrubberEl = document.getElementById('carousel-scrubber');

    if (!carouselEl || !stageEl) return;

    initCarouselListeners();

    if (drinksList) drinksList.classList.add('is-hidden');
    carouselEl.classList.remove('is-hidden');

    carouselState.drinks = drinks || [];
    carouselState.activeIndex = 0;
    carouselState.cardNodes = [];
    stageEl.innerHTML = '';

    const total = carouselState.drinks.length;
    if (total === 0) {
        if (counterEl) counterEl.textContent = '';
        stageEl.innerHTML = '<div class="card-empty">No drinks found for this category.</div>';
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        if (dotsEl) dotsEl.classList.add('is-hidden');
        if (scrubberEl) scrubberEl.classList.add('is-hidden');
        return;
    }

    carouselState.drinks.forEach((drink, idx) => {
        const card = document.createElement('article');
        card.className = 'carousel-card';

        const ageVal = drink.age || drink.Age || '';
        const badges = [];
        if (drink.ABV) badges.push(`<span class="card-badge">ABV ${drink.ABV}</span>`);
        if (ageVal && ageVal !== 'NAS') badges.push(`<span class="card-badge">${ageVal}</span>`);

        const iconBadges = getDrinkBadgeIcons(drink);
        const iconBadgesHtml = iconBadges.length
            ? `<div class="badge-icon-row">${iconBadges.map(b => `<img src="images/Badges/${b.file}" alt="${b.label}" title="${b.label}">`).join('')}</div>`
            : '';

        let bodyHtml = '';
        if (drink.occasion) bodyHtml += `<p class="card-meta-line"><strong>Occasion:</strong> ${drink.occasion}</p>`;
        if (drink.retired) bodyHtml += `<p class="card-meta-line"><strong>Retired:</strong> ${drink.retired}</p>`;

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
            if (Math.abs(carouselState.dragDeltaX) > 8) return;
            if (idx !== carouselState.activeIndex) {
                goToCarouselIndex(idx);
            }
        });

        stageEl.appendChild(card);
        carouselState.cardNodes.push(card);
    });

    const hasMultiple = total > 1;
    if (prevBtn) prevBtn.disabled = !hasMultiple;
    if (nextBtn) nextBtn.disabled = !hasMultiple;

    if (dotsEl && scrubberEl) {
        dotsEl.innerHTML = '';
        if (total <= 1) {
            dotsEl.classList.add('is-hidden');
            scrubberEl.classList.add('is-hidden');
        } else if (total <= carouselState.MAX_DOTS) {
            dotsEl.classList.remove('is-hidden');
            scrubberEl.classList.add('is-hidden');
            for (let i = 0; i < total; i++) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Go to bottle ${i + 1}`);
                dot.addEventListener('click', () => goToCarouselIndex(i));
                dotsEl.appendChild(dot);
            }
        } else {
            dotsEl.classList.add('is-hidden');
            scrubberEl.classList.remove('is-hidden');
            scrubberEl.min = 0;
            scrubberEl.max = total - 1;
            scrubberEl.value = 0;
        }
    }

    renderCarouselPositions(0);
}

// ==========================================================================
// Board Game Menu Toggle & Filtering
// ==========================================================================
(function initBoardGameMenu() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const liquorView = document.getElementById('liquor-view');
    const bgView = document.getElementById('boardgames-view');
    const bgCategoriesEl = document.getElementById('bg-categories');
    const bgPlayersEl = document.getElementById('bg-players');
    const bgListEl = document.getElementById('bg-list');
    const bgHeadingEl = document.getElementById('bg-heading');

    if (!toggleBtn || !liquorView || !bgView || !bgListEl) return;

    let selectedBgCategory = 'all';
    let selectedBgPlayers = 'any';

    function matchesCategory(game, cat) {
        if (cat === 'all') return true;
        const t = (game.type || '').toLowerCase();
        switch (cat) {
            case 'cooperative':
                return t.includes('cooperative');
            case 'strategy':
                return (
                    t.includes('strategy') ||
                    t.includes('worker placement') ||
                    t.includes('engine building') ||
                    t.includes('economic') ||
                    t.includes('area control') ||
                    t.includes('route building') ||
                    t.includes('card drafting') ||
                    t.includes('deck building') ||
                    t.includes('tactical')
                );
            case 'party':
                return (
                    t.includes('party') ||
                    t.includes('family') ||
                    t.includes('word game') ||
                    t.includes('roll-and-write') ||
                    t.includes('betting')
                );
            case 'deduction':
                return (
                    t.includes('deduction') ||
                    t.includes('mystery') ||
                    t.includes('puzzle') ||
                    t.includes('bluffing')
                );
            case 'campaign':
                return (
                    t.includes('legacy') ||
                    t.includes('campaign') ||
                    t.includes('expansion')
                );
            default:
                return true;
        }
    }

    function matchesPlayers(game, playerFilter) {
        if (playerFilter === 'any') return true;
        const min = game.minPlayers || 1;
        const max = game.maxPlayers || min;
        switch (playerFilter) {
            case '1':
                return min <= 1 && max >= 1;
            case '2':
                return min <= 2 && max >= 2;
            case '3-4':
                return min <= 4 && max >= 3;
            case '5+':
                return max >= 5;
            default:
                return true;
        }
    }

    function renderBoardGames() {
        const games = (typeof boardGamesData !== 'undefined' && Array.isArray(boardGamesData))
            ? boardGamesData
            : [];
        const filtered = games.filter(
            (g) => matchesCategory(g, selectedBgCategory) && matchesPlayers(g, selectedBgPlayers)
        );

        bgListEl.innerHTML = '';
        if (bgHeadingEl) {
            bgHeadingEl.textContent = `Board Games (${filtered.length})`;
        }

        if (filtered.length === 0) {
            bgListEl.innerHTML = '<li>No board games match those filters.</li>';
            return;
        }

        filtered.forEach((game) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${game.title}</strong><br>
                <span class="bg-meta"><em>Players:</em> ${game.players}</span>
                <span class="bg-meta"><em>Type:</em> ${game.type}</span>
                <p class="bg-desc">${game.description}</p>
            `;
            bgListEl.appendChild(li);
        });
    }

    if (bgCategoriesEl) {
        bgCategoriesEl.addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-bg-category]');
            if (!btn) return;
            bgCategoriesEl.querySelectorAll('button').forEach((b) => b.classList.remove('active-btn'));
            btn.classList.add('active-btn');
            selectedBgCategory = btn.dataset.bgCategory;
            renderBoardGames();
        });
    }

    if (bgPlayersEl) {
        bgPlayersEl.addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-bg-players]');
            if (!btn) return;
            bgPlayersEl.querySelectorAll('button').forEach((b) => b.classList.remove('active-btn'));
            btn.classList.add('active-btn');
            selectedBgPlayers = btn.dataset.bgPlayers;
            renderBoardGames();
        });
    }

    toggleBtn.addEventListener('click', () => {
        const showingGames = !bgView.classList.contains('is-hidden');
        if (showingGames) {
            bgView.classList.add('is-hidden');
            liquorView.classList.remove('is-hidden');
            toggleBtn.textContent = 'Board Games';
            toggleBtn.setAttribute('aria-pressed', 'false');
        } else {
            liquorView.classList.add('is-hidden');
            bgView.classList.remove('is-hidden');
            toggleBtn.textContent = 'Liquor Cabinet';
            toggleBtn.setAttribute('aria-pressed', 'true');
            renderBoardGames();
        }
    });
})();