const drinksData = {
    whiskey: {
        american: {
            bourbon: [
//
            ],
            rye: [
                { distillery: 'WhistlePig', bottle: '12 Old World Rye', region: 'Vermont, USA', ABV: '43%', notes: 'Rich fruit and spice notes, including rye spice, apricots, plums, raisins, dates, honey, dark chocolate, winter fruit, caramel, and vanilla', occasion: '' },
//
            ],
            americansinglemalt: [
               { distillery: 'Westland', bottle: 'American Single Malt', region: 'Washington', notes: 'Rich and complex' }, 
//
            ],
            other: [
                { distillery: 'Bainbridge Organic Distillers', bottle: 'Yama | Mizunara Cask Single Grain Whiskey', region: 'Bainbridge Island, WA', ABV: '43%', notes: 'Aromatic sandalwood, tropical flowers, star anise, joss incense; flavors of nutmeg, clove, pear, marzipan, toasted coconut, yuzu; finishes with fading spice, honey, and oak', occasion: 'Retirement Gift ‘23' },                //                
//
            ]
        },
        scotch: {
            islay: [
//
            ]
        },
        japanese: {
            all: [
                { distillery: 'Nikka', bottle: 'Yoichi - Peaty &amp; Salty', region: 'Hokkaido, Japan', ABV: '55%', notes: 'Bold peat smoke, briny maritime salinity, toasted oak, subtle sweetness', occasion: 'Aquired in Yokohama 2024' },
                { distillery: 'Nikka', bottle: 'Yoichi - Woody &amp; Vanillic', region: 'Hokkaido, Japan', ABV: '55%', notes: 'Soft vanilla on the nose, woody on the palate, hints of bourbon sweetness, cocoa, and malt', occasion: 'Aquired in Yokohama 2024' },
                { distillery: 'Nikka', bottle: 'Yoichi - Sherry &amp; Sweet', region: 'Hokkaido, Japan', ABV: '55%', notes: 'Rich dried fruit, dark chocolate, nutty sweetness, hints of spice', occasion: 'Aquired in Yokohama 2024' },
                //
            ]
        },
        restofworld: {
            all: [

            ]
        }

    },

    gin: {
        all: [
            { distillery: 'Plymouth', bottle: 'Navy Strenght', region: 'Plymouth, UK', ABV: '57%', notes: 'Brassy', occasion: '' },
            { distillery: 'Rabbit Hole', bottle: 'Bespoke Gin', region: 'Kentucky, USA', ABV: '44.5%', notes: '', occasion: 'Yosi&#x27;s Bachelor Party' },
        ]
    },
    amaro: {
        all: [
            { distillery: 'Benedictine', bottle: 'Benedictine', region: 'France', ABV: '40%', notes: '', occasion: '' },
        ]
    },
    agave: {
            mezcal: [

            ],
            tequila: [

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
            if (subcategory === 'restofworld') {
                button.textContent = 'Rest of World'; // Special case for restofworld
            } else{
            button.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1); // Capitalize
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
            // If there's only one nested subcategory, directly show the drinks
            showDrinks(category, subcategory, nestedSubcategories[0]);
        } else {
            nestedSubcategories.forEach(nestedSubcategory => {
                const button = document.createElement('button');
                if (nestedSubcategory === 'americansinglemalt') {
                    button.textContent = 'American Single Malt'; // Special case for americansinglemalt
                }
                else{
                button.textContent = nestedSubcategory.charAt(0).toUpperCase() + nestedSubcategory.slice(1); // Capitalize
                }
                button.onclick = () => showDrinks(category, subcategory, nestedSubcategory);
                subcategoriesDiv2.appendChild(button);
                
            });
        }
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
            
            if (drink.occasion) {    
                listItem.innerHTML = `
                    <strong>${drink.bottle}</strong> by ${drink.distillery} <br>
                    <em>Region:</em> ${drink.region} <br>
                    <em>Notes:</em> ${drink.notes} <br>
                    <em>Occasion:</em> ${drink.occasion}
                `;
            }
            else {
                listItem.innerHTML = `
                    <strong>${drink.bottle}</strong> by ${drink.distillery} <br>
                    <em>Region:</em> ${drink.region} <br>
                    <em>Notes:</em> ${drink.notes}
                `;
            }

            drinksList.appendChild(listItem);
        });
    } else {
        drinksList.innerHTML = '<li>No drinks found for this subcategory.</li>';
    }
}