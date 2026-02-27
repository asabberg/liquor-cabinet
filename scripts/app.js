// app.js - UI logic for whiskey flight selector

// the whiskey data is now provided by `drinksData.whiskey` from drinkdata.js
// we lazily fall back to the old global `whiskey` object if present for backwards compatibility

function parseAbv(abvStr) {
    if (typeof abvStr !== 'string') return NaN;
    return parseFloat(abvStr.replace(/[^0-9\.]/g, '')) || NaN;
}

// flatten nested whiskey object into a list with category keys
function flattenWhiskeys(data) {
    const list = [];
    for (const type in data) {
        const sub = data[type];
        if (Array.isArray(sub)) {
            sub.forEach((item) => {
                // ensure stamp information is normalized
                const stamps = [];
                ['stamp1','stamp2','stamp3','stamp4'].forEach(k => {
                    if (item[k]) stamps.push(item[k]);
                });
                if (item.stamps && Array.isArray(item.stamps)) {
                    // prefer explicit stamps array if provided
                    stamps.length = 0;
                    stamps.push(...item.stamps.slice(0,4));
                }
                list.push({ ...item, stamps, category: type });
            });
        } else if (typeof sub === 'object') {
            for (const subType in sub) {
                const arr = sub[subType];
                if (Array.isArray(arr)) {
                    arr.forEach((item) => {
                        const stamps = [];
                        ['stamp1','stamp2','stamp3','stamp4'].forEach(k => {
                            if (item[k]) stamps.push(item[k]);
                        });
                        if (item.stamps && Array.isArray(item.stamps)) {
                            stamps.length = 0;
                            stamps.push(...item.stamps.slice(0,4));
                        }
                        list.push({ ...item, stamps, category: type + '.' + subType });
                    });
                }
            }
        }
    }
    return list;
}

// Fisher-Yates shuffle
function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// helper that formats style strings for display (capitalizes words, adds spaces)
function formatStyleLabel(s) {
    if (typeof s !== 'string' || !s.length) return s;
    // special case for american single malt
    if (s.toLowerCase() === 'americansinglemalt') {
        return 'American Single Malt';
    }
    // insert space between lowercase-uppercase boundaries (if any)
    let human = s.replace(/([a-z])([A-Z])/g, '$1 $2');
    // split on non-word characters just in case
    human = human.replace(/[_\-]/g, ' ');
    // capitalize first letter of each word
    human = human.replace(/\b\w/g, c => c.toUpperCase());
    return human;
}

// utility to create a list of toggling buttons
// now accepts optional formatter function for display labels
function buildButtonList(containerId, options, selectionSet, onToggle, formatter) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = formatter ? formatter(opt) : opt;
        btn.dataset.value = opt; // store original value
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
        });
        container.appendChild(btn);
    });
}

// specialized builders for region + nested style buttons
function buildRegionButtons(regions, stylesByRegion) {
    const container = document.getElementById('regionButtons');
    container.innerHTML = '';
    regions.forEach(r => {
        const regionItem = document.createElement('div');
        regionItem.className = 'region-item';
        regionItem.setAttribute('data-region', r);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = r;
        btn.addEventListener('click', () => {
            if (selectedRegions.has(r)) {
                selectedRegions.delete(r);
                btn.classList.remove('selected');
                toggleRegionStyles(r, false);
            } else {
                selectedRegions.add(r);
                btn.classList.add('selected');
                toggleRegionStyles(r, true);
            }
        });

        const styleGroup = document.createElement('div');
        styleGroup.className = 'style-group option-list nested';
        styleGroup.style.display = 'none';

        regionItem.appendChild(btn);
        regionItem.appendChild(styleGroup);
        container.appendChild(regionItem);
    });
}

// maintain selected styles per region
const selectedStylesByRegion = {};
function toggleRegionStyles(region, show) {
    const item = document.querySelector(`.region-item[data-region="${region}"]`);
    const styleGroup = item && item.querySelector('.style-group');
    if (!styleGroup) return;
    if (show) {
        styleGroup.style.display = 'flex';
        if (!styleGroup.hasChildNodes()) {
            const opts = Array.from(stylesByRegion[region] || []).sort();
            selectedStylesByRegion[region] = new Set();
            opts.forEach(s => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = formatStyleLabel(s);
                btn.dataset.value = s;
                btn.addEventListener('click', () => {
                    const set = selectedStylesByRegion[region];
                    const val = btn.dataset.value;
                    if (set.has(val)) {
                        set.delete(val);
                        btn.classList.remove('selected');
                    } else {
                        set.add(val);
                        btn.classList.add('selected');
                    }
                });
                styleGroup.appendChild(btn);
            });
        }
    } else {
        styleGroup.style.display = 'none';
        if (selectedStylesByRegion[region]) {
            selectedStylesByRegion[region].clear();
        }
    }
}

// global state for button selections
let selectedRegions = new Set();
let selectedStyles = new Set();
let selectedDistilleries = new Set();
let selectedCasks = new Set();
let smokeyFilter = null; // null, true, or false
let selectedAbvRange = null; // possible values: 'normal','hot','high'

function collectPreferences() {
    const form = document.getElementById('prefForm');
    const formData = new FormData(form);
    // use the button-selection sets
    const regions = Array.from(selectedRegions);
    const styles = Array.from(selectedStyles);
    const distilleries = Array.from(selectedDistilleries);
    const casks = Array.from(selectedCasks);
    const smokey = smokeyFilter;
    const abvRange = selectedAbvRange;
    return { regions, styles, distilleries, casks, smokey, abvRange };
}

let cardList = [];
let currentIndex = 0;
let flight = [];
let flightLimit = 4;
let selectedFlightSize = 4;

function renderCard(item) {
    const container = document.getElementById('cardContainer');
    const progressEl = document.getElementById('cardProgress');
    
    container.innerHTML = '';
    if (!item) {
        progressEl.textContent = '';
        container.innerHTML = '<p>No more bottles to show.</p>';
        return;
    }
    
    // show progress
    progressEl.textContent = `${currentIndex + 1} of ${cardList.length}`;
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${item.bottle}</h2>
        <p><strong>${item.distillery}</strong></p>
        <p>${item.region} &middot; ABV ${item.ABV}</p>
        <p>${item.notes || ''}</p>
    `;
    container.appendChild(card);

    // if there are stamps, render them as passport-style images
    if (item.stamps && item.stamps.length) {
        const row = document.createElement('div');
        row.className = 'stamp-row';
        item.stamps.slice(0,4).forEach(name => {
            if (!name) return;
            const img = document.createElement('img');
            img.src = `images/${name}`; // relative path, user can supply full path if desired
            img.alt = name;
            row.appendChild(img);
        });
        card.appendChild(row);
    }

    // trigger enter animation
    requestAnimationFrame(() => {
        card.classList.add('enter');
    });
}

function updateFlightCount() {
    document.getElementById('flightCount').textContent = `Selected: ${flight.length}/${flightLimit}`;
    renderFlightList();
    if (flight.length === flightLimit) {
        showSummary();
    }
}

function renderFlightList() {
    const listEl = document.getElementById('flightList');
    listEl.innerHTML = '';
    flight.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.bottle} – ${item.distillery}`;
        listEl.appendChild(li);
    });
}

function showSummary() {
    document.getElementById('cards').classList.add('hidden');
    const summary = document.getElementById('summary');
    summary.classList.remove('hidden');
    const list = document.getElementById('summaryList');
    list.innerHTML = '';
    flight.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.bottle} – ${item.distillery}</strong><br/>
            ${item.region} &middot; ABV ${item.ABV}<br/>
            ${item.notes || ''}
        `;
        list.appendChild(li);
    });
}

function resetSession() {
    document.getElementById('summary').classList.add('hidden');
    document.getElementById('preferences').classList.remove('hidden');
}

function renderFlightList() {
    const listEl = document.getElementById('flightList');
    listEl.innerHTML = '';
    flight.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.bottle} – ${item.distillery}`;
        listEl.appendChild(li);
    });
}

function nextCard(added, direction) {
    const container = document.getElementById('cardContainer');
    const card = container.querySelector('.card');

    const proceed = () => {
        if (added) {
            updateFlightCount();
        }
        currentIndex += 1;
        if (currentIndex < cardList.length) {
            renderCard(cardList[currentIndex]);
        } else {
            renderCard(null);
            // If no more bottles and user has at least one bottle, show summary
            if (flight.length > 0) {
                setTimeout(() => {
                    showSummary();
                }, 500);
            }
        }
    };

    if (card) {
        // animate offscreen then proceed
        card.classList.add(direction === 'right' ? 'exit-right' : 'exit-left');
        card.addEventListener('transitionend', () => {
            proceed();
        }, { once: true });
    } else {
        proceed();
    }
}

function startSwiping(filtered) {
    flightLimit = selectedFlightSize;
    cardList = filtered;
    currentIndex = 0;
    flight = [];
    document.getElementById('preferences').classList.add('hidden');
    document.getElementById('cards').classList.remove('hidden');
    updateFlightCount();
    renderCard(cardList[currentIndex]);
}

// entry point once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    // choose data source: prefer drinksData.whiskey, but keep legacy `whiskey` var if still present
    let sourceData;
    if (typeof drinksData !== 'undefined' && drinksData.whiskey) {
        sourceData = drinksData.whiskey;
    } else if (typeof whiskey !== 'undefined') {
        console.warn('Using global `whiskey` variable; consider migrating to drinksData.js');
        sourceData = whiskey;
    } else {
        console.error('No whiskey data available!');
        sourceData = {};
    }
    const allWhiskeys = flattenWhiskeys(sourceData);

    // derive options for each preference type
    const regions = [...new Set(allWhiskeys.map(w => w.region))].filter(Boolean).sort();
    const distilleries = [...new Set(allWhiskeys.map(w => w.distillery))].filter(Boolean).sort();
    const styles = [...new Set(allWhiskeys.map(w => {
        return w.category ? w.category.split('.').pop() : '';
    }))].filter(Boolean).sort();
    const casks = [...new Set(allWhiskeys.map(w => w.cask))].filter(Boolean).sort();


    // mapping region -> available styles
    const stylesByRegion = {};
    allWhiskeys.forEach(w => {
        const r = w.region;
        const s = w.category ? w.category.split('.').pop() : '';
        if (r && s) {
            stylesByRegion[r] = stylesByRegion[r] || new Set();
            stylesByRegion[r].add(s);
        }
    });


    function refreshStyleButtons() {
        let availableStyles;
        if (selectedRegions.size === 0) {
            availableStyles = styles;
        } else {
            availableStyles = new Set();
            selectedRegions.forEach(r => {
                (stylesByRegion[r] || []).forEach(s => availableStyles.add(s));
            });
            availableStyles = Array.from(availableStyles).sort();
        }
        buildButtonList('styleButtons', availableStyles, selectedStyles, null, formatStyleLabel);
    }

    // build initial lists
    buildButtonList('regionButtons', regions, selectedRegions, refreshStyleButtons);
    refreshStyleButtons();

    // populate advanced button lists (no formatter needed)
    buildButtonList('distilleryButtons', distilleries, selectedDistilleries);
    buildButtonList('caskButtons', casks, selectedCasks);

    // setup smokey toggle buttons
    document.getElementById('smokeyYes').addEventListener('click', () => {
        if (smokeyFilter === true) {
            smokeyFilter = null;
            document.getElementById('smokeyYes').classList.remove('selected');
        } else {
            smokeyFilter = true;
            document.getElementById('smokeyYes').classList.add('selected');
            document.getElementById('smokeyNo').classList.remove('selected');
        }
    });
    document.getElementById('smokeyNo').addEventListener('click', () => {
        if (smokeyFilter === false) {
            smokeyFilter = null;
            document.getElementById('smokeyNo').classList.remove('selected');
        } else {
            smokeyFilter = false;
            document.getElementById('smokeyNo').classList.add('selected');
            document.getElementById('smokeyYes').classList.remove('selected');
        }
    });

    // setup flight size buttons
    const flightSizeButtons = {
        1: document.getElementById('size1'),
        2: document.getElementById('size2'),
        3: document.getElementById('size3'),
        4: document.getElementById('size4')
    };
    
    // Set default selection to 4
    flightSizeButtons[4].classList.add('selected');
    
    Object.entries(flightSizeButtons).forEach(([size, btn]) => {
        btn.addEventListener('click', () => {
            // Deselect all
            Object.values(flightSizeButtons).forEach(b => b.classList.remove('selected'));
            // Select clicked
            btn.classList.add('selected');
            selectedFlightSize = parseInt(size);
        });
    });

    // setup ABV range buttons
    const abvBtns = document.querySelectorAll('#abvButtons button');
    abvBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const range = btn.dataset.range;
            if (selectedAbvRange === range) {
                // toggle off
                selectedAbvRange = null;
                btn.classList.remove('selected');
            } else {
                selectedAbvRange = range;
                abvBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            }
        });
    });

    const form = document.getElementById('prefForm');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const prefs = collectPreferences();
        const filtered = allWhiskeys.filter((w) => {
            if (prefs.regions.length && !prefs.regions.includes(w.region)) return false;
            if (prefs.styles.length) {
                const style = w.category ? w.category.split('.').pop() : '';
                if (!prefs.styles.includes(style)) return false;
            }
            if (prefs.distilleries.length && !prefs.distilleries.includes(w.distillery)) return false;
            if (prefs.casks.length && !prefs.casks.includes(w.cask)) return false;
            if (prefs.smokey !== null) {
                const hasPeated = w.peated && w.peated.trim() !== '';
                if (prefs.smokey && !hasPeated) return false;
                if (!prefs.smokey && hasPeated) return false;
            }
            const abv = parseAbv(w.ABV);
            if (!isNaN(abv) && prefs.abvRange) {
                switch (prefs.abvRange) {
                    case 'normal':
                        if (abv >= 50) return false;
                        break;
                    case 'hot':
                        if (abv < 50 || abv > 55) return false;
                        break;
                    case 'high':
                        if (abv <= 55) return false;
                        break;
                }
            }
            return true;
        });
        const shuffled = shuffleArray(filtered);
        startSwiping(shuffled);
    });

    document.getElementById('passBtn').addEventListener('click', () => {
        // pass should animate left
        nextCard(false, 'left');
    });
    document.getElementById('flightBtn').addEventListener('click', () => {
        if (flight.length < flightLimit) {
            flight.push(cardList[currentIndex]);
            // adding animates right
            nextCard(true, 'right');
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        resetSession();
    });

    // allow keyboard navigation: right arrow to pass, left arrow to add
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('cards').classList.contains('hidden')) return;
        if (e.code === 'ArrowRight') {
            nextCard(false, 'right');
        } else if (e.code === 'ArrowLeft') {
            if (flight.length < flightLimit) {
                flight.push(cardList[currentIndex]);
                nextCard(true, 'left');
            }
        }
    });

    // touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const cardsDiv = document.getElementById('cards');
    cardsDiv.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    cardsDiv.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // swiped left -> pass
                nextCard(false, 'left');
            } else {
                // swiped right -> add to flight
                if (flight.length < flightLimit) {
                    flight.push(cardList[currentIndex]);
                    nextCard(true, 'right');
                }
            }
        }
    }, false);


});
