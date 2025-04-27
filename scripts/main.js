const drinksData = {
    whiskey: {
        american: {
            bourbon: [
//
                { distillery: 'Bardstown', bottle: 'Goose Island Bourbon County Finished', region: 'Kentucky, USA', ABV: '50%', Age: '', notes: 'Wet barrels', occasion: '', retired: ''  },
                { distillery: 'FEW', bottle: 'Cold Cut', region: 'Illinois, USA', ABV: '46.5%', Age: '', notes: 'Cut from barrel strenght with cold brew coffee', occasion: '', retired: ''  },
                { distillery: 'High Wire Distilling Co', bottle: 'Lost Lantern Single Cask - Jimmy Red', region: '', ABV: '58.7%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Iron Smoke', bottle: 'Casket Strenght', region: 'New York, USA', ABV: '60%', Age: '', notes: '', occasion: 'Iron Anniversary', retired: ''  },
                { distillery: 'Old Boudreau&#x27;s Insanely Small Batch', bottle: '2019', region: '', ABV: '50%', Age: '', notes: 'Sherry &amp; Angostura Bitters Barrel Finished', occasion: '', retired: ''  },
                { distillery: 'Old Boudreau&#x27;s Insanely Small Batch', bottle: '2020', region: '', ABV: '47.5%', Age: '', notes: 'Sherry &amp; Angostura Bitters Barrel Finished', occasion: '', retired: ''  },
                { distillery: 'Rabbit Hole', bottle: 'Heigold', region: 'Kentucky, USA', ABV: '47.5%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Wildwood Spirits Co', bottle: 'The Dark Door', region: 'Washington, USA', ABV: '45%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Wollersheim Distillery', bottle: 'Lost Lantern Single Cask', region: 'Wisconsin, USA', ABV: '65.6%', Age: '', notes: '', occasion: '', retired: ''  },

            ],
            rye: [
                { distillery: 'FEW', bottle: 'Immortal Rye', region: 'Illinios, USA', ABV: '46.5%', Age: '', notes: 'Uses Eight Immortals Tea', occasion: '', retired: ''  },
                { distillery: 'Michter&#x27;s', bottle: 'Straight Rye', region: 'Kentucky, USA', ABV: '42.4%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'WhistlePig', bottle: '12 Old World Rye', region: 'Vermont, USA', ABV: '43%', Age: '', notes: 'Rich fruit and spice notes, including rye spice, apricots, plums, raisins, dates, honey, dark chocolate, winter fruit, caramel, and vanilla', occasion: '', retired: ''  },
                { distillery: 'Wildwood Spirits Co', bottle: 'Rendition', region: 'Washington, USA', ABV: '45%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Willett', bottle: 'Small Batch Rye', region: 'Kentucky, USA', ABV: '55.9%', Age: '', notes: '', occasion: '', retired: ''  },
                                //
            ],
            americansinglemalt: [
                { distillery: 'St. George Spirits', bottle: 'Baller', region: 'California, USA', ABV: '47%', Age: '', notes: 'Umeshu Finished', occasion: '', retired: ''  },
                { distillery: 'Virginia Distillery Co.', bottle: 'The Brewer&#x27;s Coalition Hardywood Gingerbread Stout Cask Finished', region: 'Virginia, USA', ABV: '50%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Virginia Distillery Co.', bottle: 'The Brewer&#x27;s Coalition Goose Island Bourbon County Brand Stout Cask Finished', region: 'Virginia, USA', ABV: '50%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Colere 1st Edition', region: 'Washington, USA', ABV: '50%', Age: '', notes: 'Skagit Valley Malting Alba Barley', occasion: 'Director Whiskey', retired: ''  },
                { distillery: 'Westland', bottle: 'Colere 2nd Edition', region: 'Washington, USA', ABV: '50%', Age: '', notes: 'Talisman Barley', occasion: 'Director Whiskey', retired: ''  },
                { distillery: 'Westland', bottle: 'Colere 3rd Edition', region: 'Washington, USA', ABV: '50%', Age: '', notes: 'Pilot Barley', occasion: 'Director Whiskey', retired: ''  },
                { distillery: 'Westland', bottle: 'Colere 4th Edition', region: 'Washington, USA', ABV: '50%', Age: '', notes: 'Fritz barley, also known as NZ-151', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: '7th Peat Week - Escaped', region: 'Washington, USA', ABV: '60.8%', Age: '', notes: 'Ex-Rum Cask #6732', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: '8th Peat Week - Grand Finale', region: 'Washington, USA', ABV: '54.5%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Lost Lantern Single Cask  - Peated ASM', region: 'Washington, USA', ABV: '54.9%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 3799 - Ratification Cask', region: 'Washington, USA', ABV: '55%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 5699 - Tequila', region: 'Washington, USA', ABV: '52.6%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6234- Madeira', region: 'Washington, USA', ABV: '65.6%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6333 - Petite Syrah', region: 'Washington, USA', ABV: '61.3%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6744 - Heaviy Peated finished in Mount Gay Rum', region: 'Washington, USA', ABV: '53.9%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 7637 - Rachel&#x27;s Handfill', region: 'Washington, USA', ABV: '48.9%', Age: '', notes: 'Pajarette Hogshead', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 10741 - Asa&#x27;s Handfill (Bottle 69)', region: 'Washington, USA', ABV: '63%', Age: '', notes: 'Peated Malt &amp; Amarone Cask', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Fast Penny Cask Exchange', region: 'Washington, USA', ABV: '52.6%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Greenwood Cask Exchange', region: 'Washington, USA', ABV: '50.1%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Cloudburst Cask Exchange', region: 'Washington, USA', ABV: '48.5%', Age: '', notes: 'Old Tubthumper Barleywine Cask', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Holy Mountain Cask Exchange', region: 'Washington, USA', ABV: '50%', Age: '', notes: 'Finished in American Strong Beer Casks that previously held Port (35 months)', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Wine Cask Finish', region: 'Washington, USA', ABV: '46%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Sherry Wood', region: 'Washington, USA', ABV: '46%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westland', bottle: 'Flagship', region: 'Washington, USA', ABV: '46%', Age: '40 Months', notes: '', occasion: '', retired: ''  },
                { distillery: 'Westward Whiskey', bottle: 'Lost Lantern Single Cask  - ASM Finished in Stout Casks', region: 'Oregon, USA', ABV: '68.5%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Whiskey Del Bac', bottle: 'Distiller&#x27;s Cut, Fall 2023', region: 'Arizona, USA', ABV: '58%', Age: '', notes: 'Mesquite smoked and finished in Sauternes barrels &amp; Tawny Port barrels', occasion: '', retired: ''  },
                { distillery: 'Whiskey Del Bac', bottle: 'Dorado', region: 'Arizona, USA', ABV: '46%', Age: '', notes: 'Mesquite smoked', occasion: '', retired: ''  },
                
                //
            ],
            other: [
                { distillery: '45th Parellel', bottle: 'Wisconsin Wheat - Woodman&#x27;s Private Barrel', region: 'Wisconsin, USA', ABV: '60%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Bainbridge Organic Distillers', bottle: 'Battle Point, Two Islands Hokkadio Mizunara Cask', region: 'Washington, USA', ABV: '63.9%', Age: '', notes: 'Full Barrel Proof', occasion: '', retired: ''  },
                { distillery: 'Deschutes x Bend Distillery', bottle: 'Black Butte Whiskey', region: 'Oregon, USA', ABV: '47%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'FEW', bottle: 'Chicago Smokeworks', region: 'Arizona, USA', ABV: '46.5%', Age: '', notes: 'Cherrywood Smoked Malt', occasion: '', retired: ''  },
                { distillery: 'Koval', bottle: 'Oat', region: 'Illinois, USA', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Lost Lantern', bottle: 'Flame', region: 'Vermont, USA', ABV: '57%', Age: '', notes: 'Blend of Sante Fe Spirits and Whiskey Del Bac', occasion: '', retired: ''  },
                { distillery: 'Michter&#x27;s', bottle: 'American No. 1', region: 'Kentucky, USA', ABV: '41.7%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Michter&#x27;s', bottle: 'Sour Mash', region: 'Kentucky, USA', ABV: '43%', Age: '', notes: '', occasion: '', retired: ''  },
                                //
            ]
        },
        scotch: {
            islay: [
//
                    { distillery: 'Ardbeg', bottle: 'An Oa', region: 'Islay', ABV: '46.6%', Age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Ardbeg', bottle: 'Uigeadail', region: 'Islay', ABV: '54.2%', Age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Ardbeg', bottle: 'Spectacular', region: 'Islay', ABV: '46%', Age: '', notes: 'Port Cask', occasion: '', retired: ''  },
                    { distillery: 'Ardbeg', bottle: 'Ten Year', region: 'Islay', ABV: '46.0%', Age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Port Charlotte', bottle: 'Islay Barley Heavily Peated', region: 'Islay', ABV: '50%', Age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Chivas Regal', bottle: 'Mizunara', region: 'Scotland', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
]
        },
        japanese: {
            all: [
                { distillery: 'Ichiro&#x27;s Malt', bottle: 'MWR', region: 'Japan', ABV: '46%', Age: '', notes: '', occasion: 'Yokohama Trip Dec &#x27;24', retired: ''  },
                { distillery: 'Ichiro&#x27;s Malt', bottle: 'Wine Wood Reserve', region: 'Japan', ABV: '46%', Age: '', notes: '', occasion: 'Yokohama Trip Dec &#x27;24', retired: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Peaty &amp; Salty', region: 'Hokkaido, Japan', ABV: '55%', Age: '', notes: 'Bold peat smoke, briny maritime salinity, toasted oak, subtle sweetness', occasion: 'Aquired in Yokohama 2024', retired: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Woody &amp; Vanillic', region: 'Hokkaido, Japan', ABV: '55%', Age: '', notes: 'Soft vanilla on the nose, woody on the palate, hints of bourbon sweetness, cocoa, and malt', occasion: 'Aquired in Yokohama 2024', retired: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Sherry &amp; Sweet', region: 'Hokkaido, Japan', ABV: '55%', Age: '', notes: 'Rich dried fruit, dark chocolate, nutty sweetness, hints of spice', occasion: 'Aquired in Yokohama 2024', retired: ''  },
                { distillery: 'Suntory', bottle: 'Hibiki Japanese Harmony', region: 'Japan', ABV: '43%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Suntory', bottle: 'Hakushu', region: 'Yamanashi, Japan', ABV: '43%', Age: '', notes: '', occasion: '', retired: ''  },
                               //
            ]
        },
        restofworld: {
            all: [
                { distillery: 'Jameson', bottle: 'Stout Edition', region: 'Ireland', ABV: '40%', Age: '', notes: 'Stout Cask Finish', occasion: '', retired: ''  },
                { distillery: 'Kavalan', bottle: 'Concertmaster - Port Cask', region: 'Taiwan', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Kavalan', bottle: 'King Car Conductor', region: 'Taiwan', ABV: '46%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Kavalan', bottle: 'Oloroso Sherry Oak', region: 'Taiwan', ABV: '54%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Kavalan', bottle: 'Port Oak', region: 'Taiwan', ABV: '54%', Age: '', notes: '', occasion: '', retired: ''  },
                                
            ]
        }

    },

    gin: {
        all: [
            { distillery: 'Bainbridge Organic Distillers', bottle: 'Islay Cask Douglas Fir Gin', region: 'Washington, USA', ABV: '45%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Big Gin', bottle: 'Peat Barreled', region: 'Washington, USA', ABV: '47%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Empirical Spirits', bottle: 'Charlene McGee', region: 'Copenhagen, Denmark', ABV: '40%', Age: '', notes: 'Peated Barly with Smoked Juniper Aged in Olorsor Casks', occasion: '', retired: ''  },
            { distillery: 'Empress 1908', bottle: 'Oaken Gin', region: 'Victoria, Canada', ABV: '42.5%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'FEW', bottle: 'Breakfast Gin', region: 'Illinois, USA', ABV: '42%', Age: '', notes: 'Distilled with Earl Grey Tea', occasion: '', retired: ''  },
            { distillery: 'Highside Distiling', bottle: 'Gin', region: 'Washington, USA', ABV: '44%', Age: '', notes: 'Uses distilled apples as its base', occasion: '', retired: ''  },
            { distillery: 'Jin Jiji', bottle: 'India Dry Gin', region: 'India', ABV: '43%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Plymouth', bottle: 'Navy Strenght', region: 'Plymouth, UK', ABV: '57%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Rabbit Hole', bottle: 'Bespoke Gin', region: 'Kentucky, USA', ABV: '44.5%', Age: '', notes: '', occasion: 'Yosi&#x27;s Bachelor Party', retired: ''  },
            { distillery: 'Windspiel', bottle: 'Premium Dry Gin', region: 'Eifel, Germany', ABV: '47%', Age: '', notes: '', occasion: '', retired: ''  },
                            
        ]
    },
    amaro: {
        all: [
            { distillery: 'Benedictine', bottle: 'Benedictine', region: 'France', ABV: '40%', notes: '', occasion: '' },
            { distillery: 'Letterpress Distilling', bottle: 'Amaro Amorino Riserva #3', region: 'Washington, USA', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Letterpress Distilling', bottle: 'Amaro Amorino', region: 'Washington, USA', ABV: '32%', Age: '', notes: '', occasion: '', retired: ''  },
            
        ]
    },
    others: {
            agave: [
                { distillery: 'Bozal', bottle: 'Ensamble', region: 'Oaxaca, Mexico', ABV: '47%', Age: '', notes: '', occasion: 'Ceramic Anniversary', retired: ''  },
                { distillery: 'Vago', bottle: 'Elote', region: 'Oaxaca, Mexico', ABV: '50%', Age: '', notes: '', occasion: '', retired: ''  },
                
            ],
            rum: [
                { distillery: 'Koloa Rum Company', bottle: '12 Barrel Select', region: '', ABV: '46%', Age: '', notes: '', occasion: '', retired: ''  },            ],
            brandy: [
                { distillery: 'Orcas Island Distillery', bottle: 'Archipelago de Haro - Apple Brandy', region: 'Washington, USA', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Ritual Sister', bottle: 'Smoked Pineapple', region: 'New York, USA', ABV: '40%', Age: '', notes: '', occasion: '', retired: ''  },
            ]

    },
    retired: {
            all: [
                { distillery: 'Kavalan', bottle: 'Classic Single Malt', region: 'Taiwan', ABV: '40%', Age: '', notes: '', occasion: '', retired: 'Jul-25'  },
                { distillery: 'Kavalan', bottle: 'Concertmaster - Sherry Cask', region: 'Taiwan', ABV: '40%', Age: '', notes: '', occasion: '', retired: 'Jul-25'  },
                    
            ]
        },

    hardcore: {
        all: [
            { distillery: 'Bainbridge Organic Distillers', bottle: 'Yama | Mizunara Cask Single Grain Whiskey', region: 'Bainbridge Island, WA', ABV: '43%', Age: '', notes: 'Aromatic sandalwood, tropical flowers, star anise, joss incense; flavors of nutmeg, clove, pear, marzipan, toasted coconut, yuzu; finishes with fading spice, honey, and oak', occasion: 'Retirement Gift ‘23', retired: ''  },
            { distillery: 'Michter&#x27;s', bottle: 'Toasted Barrel Bourbon', region: 'Kentucky, USA', ABV: '45.7%', Age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Suntory', bottle: 'Hibiki 17', region: 'Japan', ABV: '43%', Age: '', notes: '', occasion: '', retired: ''  },
                    ]
    },

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
            
            let drinkDetails = `
                <strong>${drink.bottle}</strong> by ${drink.distillery} <br>
                <em>Region:</em> ${drink.region} <br>
                <em>ABV:</em> ${drink.ABV} <br>
            `;

            // Add Age if present
            if (drink.Age && drink.Age !== 'NAS') {
                drinkDetails += `<em>Age:</em> ${drink.Age} <br>`;
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