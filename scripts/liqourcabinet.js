function showSubcategories(category) {
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
            showDrinks(category, subcategories[0]);
            
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

document.getElementById('hardcore-btn').addEventListener('click', function() {
    clearAllActiveButtons();
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = '';
    const subcategoriesDiv = document.getElementById('subcategories');
    subcategoriesDiv.innerHTML = '';
    const subcategoriesDiv2 = document.getElementById('subcategories2');
    subcategoriesDiv2.innerHTML = '';
    showDrinks(null, null, null, drinksData.whiskey.unicorns.unicorn);
});

document.getElementById('retired-btn').addEventListener('click', function() {
    clearAllActiveButtons();
    this.classList.add('active-btn');
    showSubcategories('retired');
});

// Call this after DOMContentLoaded or at the end of your script:
setActiveButtonDelegated('#categories', '.category-btn');
setActiveButtonDelegated('#subcategories', '.subcategory-btn');
setActiveButtonDelegated('#subcategories2', '.subcategory2-btn');
// If you have a third layer, add another call with the appropriate selectors