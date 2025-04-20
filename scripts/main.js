const drinksData = {
    whiskey: {
        bourbon: {
            kentucky: [
                { distillery: 'Maker\'s Mark', bottle: 'Original', region: 'Kentucky', notes: 'Smooth and sweet' },
                { distillery: 'Woodford Reserve', bottle: 'Double Oaked', region: 'Kentucky', notes: 'Rich and smoky' }
            ],
            tennesse: [
                { distillery: 'Jack Daniels', bottle: 'No 7', region: 'Kentucky', notes: 'Smooth and sweet' },
                { distillery: 'Woodford Reserve', bottle: 'Double Oaked', region: 'Kentucky', notes: 'Rich and smoky' }
            ]
        },
        scotch: {
            highland: [
                { distillery: 'Glenfiddich', bottle: '12 Year Old', region: 'Scotland', notes: 'Fruity and fresh' },
                { distillery: 'Macallan', bottle: '18 Year Old', region: 'Scotland', notes: 'Rich and complex' }
            ]
        }
    },
    vodka: {
        all: [
            { distillery: 'Absolut', bottle: 'Citron', region: 'Sweden', notes: 'Lemon-flavored' },
            { distillery: 'Smirnoff', bottle: 'Vanilla', region: 'Russia', notes: 'Vanilla-flavored' },
            { distillery: 'Grey Goose', bottle: 'Original', region: 'France', notes: 'Soft and smooth' },
            { distillery: 'Belvedere', bottle: 'Original', region: 'Poland', notes: 'Clean and crisp' }
        ]
    },
    rum: {
        dark: [
            { distillery: 'Kraken', bottle: 'Black Spiced Rum', region: 'Caribbean', notes: 'Rich and spicy' },
            { distillery: 'Myers\'s', bottle: 'Original Dark', region: 'Jamaica', notes: 'Bold and robust' }
        ],
        light: [
            { distillery: 'Bacardi', bottle: 'Superior', region: 'Puerto Rico', notes: 'Light and dry' },
            { distillery: 'Havana Club', bottle: '3 Year Old', region: 'Cuba', notes: 'Smooth and versatile' }
        ]
    }
};

function showSubcategories(category) {
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = ''; // Clear the current list

    const subcategoriesDiv = document.getElementById('subcategories');
    subcategoriesDiv.innerHTML = ''; // Clear existing subcategory buttons

    const subcategoriesDiv2 = document.getElementById('subcategories2');
    subcategoriesDiv2.innerHTML = ''; // Clear existing subcategory buttons

    if (drinksData[category]) {
        const subcategories = Object.keys(drinksData[category]);
        
        if (subcategories.length === 1) {
            // If there's only one subcategory, directly show the drinks
            showDrinks(category, subcategories[0]);
        }else subcategories.forEach(subcategory => {
            const button = document.createElement('button');
            button.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1); // Capitalize
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
        nestedSubcategories.forEach(nestedSubcategory => {
            const button = document.createElement('button');
            button.textContent = nestedSubcategory.charAt(0).toUpperCase() + nestedSubcategory.slice(1); // Capitalize
            button.onclick = () => showDrinks(category, subcategory, nestedSubcategory);
            subcategoriesDiv2.appendChild(button);
        });
    }
}

function showDrinks(category, subcategory, nestedSubcategory = null) {
    const drinksList = document.getElementById('drinks-list');
    drinksList.innerHTML = ''; // Clear the current list

    let drinks = [];
    
    if (nestedSubcategory) {
        drinks = drinksData[category][subcategory][nestedSubcategory] || [];
    } else {
        drinks = drinksData[category][subcategory] || [];
    }

    if (drinks.length > 0) {
        drinks.forEach(drink => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${drink.bottle}</strong> by ${drink.distillery} <br>
                <em>Region:</em> ${drink.region} <br>
                <em>Notes:</em> ${drink.notes}
            `;
            drinksList.appendChild(listItem);
        });
    } else {
        drinksList.innerHTML = '<li>No drinks found for this subcategory.</li>';
    }
}