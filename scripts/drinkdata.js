// drinkdata.js - centralized repository for beverage collections used by the site
// currently the whiskey selector only consumes `drinksData.whiskey` but the object
// also holds gin, amaro, and other categories for future expansion.

const drinksData = {
    whiskey: {
        american: {
        bourbon: [
//
                { distillery: 'Bardstown', bottle: 'Goose Island Bourbon County Finished', region: 'Kentucky, USA', ABV: '50%', age: '', notes: 'Barrels were still "wet" when filled with bourbon', occasion: '', retired: '', peated: '', cask: 'Stout', other: ''  },
                { distillery: 'FEW', bottle: 'Cold Cut', region: 'Illinois, USA', ABV: '46.5%', age: '', notes: 'Cut from barrel strenght with cold brew coffee', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'FEW', bottle: 'Lost Lantern Single Cask No. 3', region: 'Illinois, USA', ABV: '62.3%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'High Wire Distilling Co', bottle: 'Lost Lantern Single Cask - Jimmy Red', region: 'South Carolina', ABV: '58.7%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Iron Smoke', bottle: 'Casket Strength', region: 'New York, USA', ABV: '60%', age: '', notes: '', occasion: 'Iron Anniversary', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Old Boudreau\'s', bottle: 'Old Boudreau\'s Insanely Small Batch 2019 Release', region: 'Washington, USA', ABV: '50%', age: '12 Years', notes: 'Sherry \& Angostura Bitters Barrel Finished', occasion: '', retired: '', peated: '', cask: 'Angostura Bitters', other: ''  },
                { distillery: 'Old Boudreau\'s', bottle: 'Old Boudreau\'s Insanely Small Batch 2020 Release', region: 'Washington, USA', ABV: '47.5%', age: '12 Years', notes: 'Sherry \& Angostura Bitters Barrel Finished', occasion: '', retired: '', peated: '', cask: 'Angostura Bitters', other: ''  },
                { distillery: 'Old Fitzgerald', bottle: 'Larceny', region: 'Kentucky, USA', ABV: '46%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Rabbit Hole', bottle: 'Heigold', region: 'Kentucky, USA', ABV: '47.5%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Wildwood Spirits Co', bottle: 'The Dark Door', region: 'Washington, USA', ABV: '45%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Wollersheim Distillery', bottle: 'Lost Lantern Single Cask', region: 'Wisconsin, USA', ABV: '65.6%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Woodinville Whiskey Co.', bottle: 'Lost Lantern Single Cask No. 8', region: 'Washington, USA', ABV: '58.5%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },

            ],
            rye: [
                { distillery: 'FEW', bottle: 'Immortal Rye', region: 'Illinios, USA', ABV: '46.5%', age: '', notes: 'Uses Eight Immortals Tea', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Michter\'s', bottle: 'Straight Rye', region: 'Kentucky, USA', ABV: '42.4%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'WhistlePig', bottle: '12 Old World Rye', region: 'Vermont, USA', ABV: '43%', age: '12 Years', notes: 'Rich fruit and spice notes, including rye spice, apricots, plums, raisins, dates, honey, dark chocolate, winter fruit, caramel, and vanilla', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'WhistlePig', bottle: 'Small Batch Rye', region: 'Vermont, USA', ABV: '50%', age: '10 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Wildwood Spirits Co', bottle: 'Rendition', region: 'Washington, USA', ABV: '45%', age: '5 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Willett', bottle: 'Small Batch Rye', region: 'Kentucky, USA', ABV: '55.9%', age: '4 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                                                                //
            ],
            americansinglemalt: [
                { distillery: 'Copperworks', bottle: 'Single Cask - Color Cask', region: 'Washington, USA', ABV: '50%', age: '4 Years 9 Months', notes: 'Aged in a 200 Year Old Sherry Color Cask', occasion: '', retired: '', peated: '', cask: 'Sherry', other: ''  },
                { distillery: 'Copperworks', bottle: 'Single Cask - Letterpress Amaro', region: 'Washington, USA', ABV: '50%', age: '7 Years 1 Months', notes: '1 Month Finish in Amaro Amorino Riserva Cask', occasion: '', retired: '', peated: '', cask: 'Amaro', other: ''  },
                { distillery: 'Copperworks', bottle: 'Single Cask - Pondera Cabernet', region: 'Washington, USA', ABV: '50%', age: '7 Years 7 Months', notes: '7 Month Finish in Pondera Cabernet Cask', occasion: '', retired: '', peated: '', cask: 'Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 3799 - Ratification Cask', region: 'Washington, USA', ABV: '55%', age: '8 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 5699 - Tequila Cask', region: 'Washington, USA', ABV: '52.6%', age: '9 Years', notes: '', occasion: '', retired: '', peated: '', cask: 'Tequila', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6234 - Madeira Cask', region: 'Washington, USA', ABV: '65.6%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6333 - Petite Syrah Cask', region: 'Washington, USA', ABV: '61.3%', age: '8 Years', notes: '', occasion: '', retired: '', peated: '', cask: 'Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 6744 - Mount Gay Rum Cask', region: 'Washington, USA', ABV: '53.9%', age: '9 Years', notes: '', occasion: '', retired: '', peated: 'yes', cask: 'Rum', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 7637 - Rachel\'s Handfill', region: 'Washington, USA', ABV: '48.9%', age: '', notes: 'Pajarette Hogshead', occasion: '', retired: '', peated: 'Dessert Wine', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 7858 - Rachel\'s 2nd Handfill (Bottle 7)', region: 'Washington, USA', ABV: '52%', age: '9 Years', notes: 'White Port Cask Finish', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 8803 - Lucky Envelope Stout Finish Single Cask', region: 'Washington, USA', ABV: '56.3%', age: '5 Years', notes: 'Pilsen Malt', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'Westland', bottle: 'Cask No. 10741 - Asa\'s Handfill (Bottle 69)', region: 'Washington, USA', ABV: '63%', age: '', notes: 'Peated Malt &amp; Amarone Cask', occasion: '', retired: '', peated: 'yes', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Colere 1st Edition', region: 'Washington, USA', ABV: '50%', age: '4 Years', notes: 'Made with Skagit Valley Malting Alba Barley', occasion: 'Promotion to Director - March 2024', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Colere 2nd Edition', region: 'Washington, USA', ABV: '50%', age: '4.9 Years', notes: 'Made with Talisman Barley', occasion: 'Promotion to Director - March 2024', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Colere 3rd Edition', region: 'Washington, USA', ABV: '50%', age: '3.3 Years', notes: 'Made with Pilot Barley', occasion: 'First big solo outing after Sully was born - August 2023', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Colere 4th Edition', region: 'Washington, USA', ABV: '50%', age: '5.9 Years', notes: 'Made with Fritz Barley, also known as NZ-151', occasion: '', retired: '', peated: '', cask: 'Rum', other: ''  },
                { distillery: 'Westland', bottle: 'Peat Week 7 - Escaped', region: 'Washington, USA', ABV: '60.8%', age: '7.4 Years', notes: 'Ex-Rum Cask #6732', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Peat Week 8 - Grand Finale', region: 'Washington, USA', ABV: '54.5%', age: '7.1 Years', notes: '', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Peat Week 2026 - Mossfire Mason', region: 'Washington, USA', ABV: '50%', age: '6 Years', notes: 'Heavily Peated - Bairds Peated Malt from Scotland', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Peat Week 2026 - Augustus MacHuff', region: 'Washington, USA', ABV: '50%', age: '8 Years', notes: 'Lightly Peated - WA Skagit Malting, With WA Peat', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },            
                { distillery: 'Westland', bottle: 'Cask Exchange - Black Raven Brewing', region: 'Washington, USA', ABV: '50%', age: '9 Years', notes: 'Finished in "Pour Les Oiseaux" Farmhouse Saison Casks. The  beer was brewed with Cherry Lambic wild yeast', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'Westland', bottle: 'Cask Exchange - Cloudburst Brewing', region: 'Washington, USA', ABV: '48.5%', age: '', notes: 'Old Tubthumper Barleywine Cask', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Cask Exchange - Fast Penny Spirits', region: 'Washington, USA', ABV: '52.6%', age: '9 Years', notes: '', occasion: '', retired: '', peated: '', cask: 'Amaro', other: ''  },           
                { distillery: 'Westland', bottle: 'Cask Exchange - Greenwood Cider', region: 'Washington, USA', ABV: '50.1%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: 'Cider', other: ''  },
                { distillery: 'Westland', bottle: 'Cask Exchange - Holy Mountain Brewing', region: 'Washington, USA', ABV: '50%', age: '6 Years', notes: 'Finished in American Strong Beer Casks that previously held Port', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'Westland', bottle: 'Cask Exchange - Sons Of Vancouver', region: 'Washington, USA', ABV: '55.3%', age: '', notes: 'Finished in No 82 Amaretto Casks', occasion: '', retired: '', peated: '', cask: 'Amaretto', other: ''  },             
                { distillery: 'Westland', bottle: 'Lost Lantern Single Cask - Peated ASM', region: 'Washington, USA', ABV: '54.9%', age: '9.99 Years', notes: '', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Flagship', region: 'Washington, USA', ABV: '46%', age: '3.3 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Garryaana 10th Edition', region: 'Washington, USA', ABV: '50%', age: '10 Years', notes: 'Primary Casks: First & Second Fill Garry Oak ', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Sherry Wood', region: 'Washington, USA', ABV: '46%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Solum 3rd Edition', region: 'Washington, USA', ABV: '50%', age: '4 Years', notes: 'Skagit Valley Malting Peated Malt - Using only Peat and Malt from the PNW', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Wine Cask Finish', region: 'Washington, USA', ABV: '46%', age: '5 Years', notes: '', occasion: '', retired: '', peated: '', cask: 'Wine', other: ''  },
                { distillery: 'Westland', bottle: 'Watchpost', region: 'Washington, USA', ABV: '42.5%', age: '8 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Westland', bottle: 'Winter 2025', region: 'Washington, USA', ABV: '46%', age: '8 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Whiskey Del Bac', bottle: 'Distiller\'s Cut, Fall 2023', region: 'Arizona, USA', ABV: '58%', age: '', notes: 'Mesquite smoked and finished in Sauternes barrels &amp; Tawny Port barrels', occasion: '', retired: '', peated: 'yes', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Whiskey Del Bac', bottle: 'Dorado', region: 'Arizona, USA', ABV: '46%', age: '', notes: 'Mesquite smoked', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Westward Whiskey', bottle: 'Lost Lantern Single Cask  - ASM Finished in Stout Casks', region: 'Oregon, USA', ABV: '68.5%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'St. George Spirits', bottle: 'Baller', region: 'California, USA', ABV: '47%', age: '', notes: 'Umeshu Finished', occasion: '', retired: '', peated: '', cask: 'Umeshu', other: ''  },
                { distillery: 'Virginia Distillery Co.', bottle: 'The Brewer\'s Coalition Goose Island Bourbon County Brand Stout Cask Finished', region: 'Virginia, USA', ABV: '50%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'Virginia Distillery Co.', bottle: 'The Brewer\'s Coalition Hardywood Gingerbread Stout Cask Finished', region: 'Virginia, USA', ABV: '50%', age: '', notes: 'One of Whiskey Advocates 2024 Most Interesting Whiskeys', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                               
                //
            ],
            other: [
                { distillery: '45th Parellel', bottle: 'Wisconsin Wheat - Woodman\'s Private Barrel', region: 'Wisconsin, USA', ABV: '60%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Bainbridge Organic Distillers', bottle: 'Battle Point Whiskey', region: 'Washington, USA', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Bainbridge Organic Distillers', bottle: 'Battle Point, Two Islands Hokkadio Mizunara Cask', region: 'Washington, USA', ABV: '63.9%', age: '', notes: 'Full Barrel Proof', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Deschutes x Bend Distillery', bottle: 'Black Butte Whiskey', region: 'Oregon, USA', ABV: '47%', age: '5 Years', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'FEW', bottle: 'Chicago Smokeworks', region: 'Illinois, USA', ABV: '46.5%', age: '', notes: 'Cherrywood Smoked Malt', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Iron Smoke', bottle: 'Rattlesnake Rosie\'s Apple Pie', region: 'New York, USA', ABV: '35%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Koval', bottle: 'Oat', region: 'Illinois, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Lost Lantern', bottle: 'Flame', region: 'Vermont, USA', ABV: '57%', age: '', notes: 'Blend of Sante Fe Spirits and Whiskey Del Bac', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Michter\'s', bottle: 'American No. 1', region: 'Kentucky, USA', ABV: '41.7%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Michter\'s', bottle: 'Sour Mash', region: 'Kentucky, USA', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                                //
            ]
        },
        scotch: {
            scotch: [
//
                { distillery: 'Ardbeg', bottle: 'An Oa', region: 'Islay', ABV: '46.6%', age: '', notes: '', occasion: '', retired: '', peated: 'yes', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Ardbeg', bottle: 'Smokiverse', region: 'Islay', ABV: '48.3%', age: '', notes: 'Uses a high-gravity mash', occasion: 'Became Director of Product Creation - July 2025', retired: '', peated: 'yes', cask: '', other: '', stamps:['smokey.png'] },
                { distillery: 'Ardbeg', bottle: 'Spectacular', region: 'Islay', ABV: '46%', age: '', notes: 'Port Cask', occasion: '', retired: '', peated: 'yes', cask: 'Dessert Wine', other: '', stamps:['smokey2.png']  },
                { distillery: 'Ardbeg', bottle: 'Ten Year', region: 'Islay', ABV: '46%', age: '10 Years', notes: '', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Ardbeg', bottle: 'Uigeadail', region: 'Islay', ABV: '54.2%', age: '', notes: '', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Bruichladdich', bottle: 'The Classic Laddie', region: 'Islay', ABV: '50%', age: '', notes: '', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Port Charlotte', bottle: 'Islay Barley Heavily Peated', region: 'Islay', ABV: '50%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Glenmorangie ', bottle: 'A Tale of the Forest', region: 'Highlands', ABV: '46%', age: '', notes: 'Barley kilned with woodland botanicals', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Glenmorangie ', bottle: 'A Tale of Ice Cream', region: 'Highlands', ABV: '46%', age: '', notes: 'Finished in high-vanillin casks', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Glenmorangie ', bottle: 'A Tale of Spices', region: 'Highlands', ABV: '46%', age: '', notes: 'A blend finished in Moroccan Red Wine, New Charred Oak, Shaved and Toasted Red Wine and PX Sherry Casks', occasion: '', retired: '', peated: '', cask: 'Wine', other: ''  },
                { distillery: 'Chivas Regal', bottle: 'Mizunara', region: 'Scotland', ABV: '40%', age: '12 Years', notes: '', occasion: '', retired: '', peated: '', cask: 'Mizunara', other: ''  },
                { distillery: 'Monkey Shoulder', bottle: 'Monkey Shoulder Batch 27', region: 'Scotland', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Kirkland Signature', bottle: 'Lowland Single Malt', region: 'Lowland', ABV: '46%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
            ]
        },
        japanese: {
            japanese: [
                { distillery: 'Ichiro\'s Malt', bottle: 'MWR - Mizunara Wood Reserve', region: 'Japan', ABV: '46%', age: '', notes: '', occasion: 'Yokohama Trip Dec \'24', retired: '', peated: '', cask: 'Mizunara', other: ''  },
                { distillery: 'Ichiro\'s Malt', bottle: 'Wine Wood Reserve', region: 'Japan', ABV: '46%', age: '', notes: '', occasion: 'Yokohama Trip Dec \'24', retired: '', peated: '', cask: 'Wine', other: ''  },
                { distillery: 'Nikka', bottle: 'Miyagikyo Single Malt', region: 'Miyagi, Japan', ABV: '45%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Peaty &amp; Salty', region: 'Hokkaido, Japan', ABV: '55%', age: 'NAS', notes: 'Bold peat smoke, briny maritime salinity, toasted oak, subtle sweetness', occasion: 'Aquired in Yokohama 2024', retired: '', peated: 'yes', cask: '', other: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Sherry &amp; Sweet', region: 'Hokkaido, Japan', ABV: '55%', age: 'NAS', notes: 'Rich dried fruit, dark chocolate, nutty sweetness, hints of spice', occasion: 'Aquired in Yokohama 2024', retired: '', peated: '', cask: 'Dessert Wine', other: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi - Woody &amp; Vanillic', region: 'Hokkaido, Japan', ABV: '55%', age: 'NAS', notes: 'Soft vanilla on the nose, woody on the palate, hints of bourbon sweetness, cocoa, and malt', occasion: 'Aquired in Yokohama 2024', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Nikka', bottle: 'Yoichi Single Malt', region: 'Hokkaido, Japan', ABV: '45%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Suntory', bottle: 'Hakushu', region: 'Yamanashi, Japan', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Suntory', bottle: 'Hibiki Japanese Harmony', region: 'Japan', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Suntory', bottle: 'The Yamazaki', region: 'Osaka, Japan', ABV: '43%', age: '', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                { distillery: 'Suntory', bottle: 'The Yamazaki 12 Year', region: 'Osaka, Japan', ABV: '43%', age: '12 Year', notes: '', occasion: '', retired: '', peated: '', cask: '', other: ''  },
                                                               //
            ]
        },
        restofworld: {
            world: [
                { distillery: 'Jameson', bottle: 'Stout Edition', region: 'Ireland', ABV: '40%', age: '', notes: 'Stout Cask Finish', occasion: '', retired: '', peated: '', cask: 'Beerg', other: ''  },
                { distillery: 'Odd Society', bottle: 'Bomber Brewing Community Collaboration', region: 'Vancouver, Canada', ABV: '50%', age: '', notes: 'Double IPA Whiskey', occasion: '', retired: '', peated: '', cask: 'Beer', other: ''  },
                { distillery: 'Odd Society', bottle: 'Burns Bog', region: 'Vancouver, Canada', ABV: '46%', age: '', notes: 'Canadian Smoked Malt Whiskey', occasion: '', retired: '', peated: 'yes', cask: '', other: ''  },              
            ]
        },    
        unicorns: {
            unicorn:[    
                { distillery: 'Bainbridge Organic Distillers', bottle: 'Yama | Mizunara Cask Single Grain Whiskey', region: 'Bainbridge Island, WA', ABV: '43%', Age: '', notes: 'Aromatic sandalwood, tropical flowers, star anise, joss incense; flavors of nutmeg, clove, pear, marzipan, toasted coconut, yuzu; finishes with fading spice, honey, and oak', occasion: 'Rachel\'s Retirement Gift 2023', retired: ''  },
                { distillery: 'Akkeshi', bottle: 'Hakuro - 2023 Release', region: 'Hokkaido, Japan', ABV: '55%', Age: '', notes: 'Hakuro is the heart of September, the 8th through the 22nd, when dewy summer nights embrace the last of summer’s vibrance', occasion: 'Potty Trained Sully + 10th Wedding Anniversary August 2025', retired: ''  },
                { distillery: 'Kavalan', bottle: 'Soloist Vinho Barrique Cask Strength', region: 'Taiwan', ABV: '58.6%', age: '', notes: 'Cask W170113031A', occasion: 'Denys Quit - July 2025', retired: ''  },
                { distillery: 'Kavalan', bottle: 'Soloist Solist ex-Bourbon Cask Strength', region: 'Taiwan', ABV: '58.3%', age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Michter\'s', bottle: 'Toasted Barrel Bourbon', region: 'Kentucky, USA', ABV: '45.7%', Age: '', notes: '', occasion: 'Minos ASR - November 2024', retired: ''  },
                { distillery: 'Suntory', bottle: 'Hibiki 17', region: 'Japan', ABV: '43%', Age: '17 Years', notes: '', occasion: 'Christmas Present', retired: ''  },
            ]
       }


    },

    gin: {
        all: [
            { distillery: 'Arbutus Distllery', bottle: 'Blue Gin', region: 'Vancouver, Canada', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Bainbridge Organic Distillers', bottle: 'Islay Cask Douglas Fir Gin', region: 'Washington, USA', ABV: '45%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Big Gin', bottle: 'Peat Barreled', region: 'Washington, USA', ABV: '47%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Cirka', bottle: 'Gin Navy Strength', region: 'Montreal, Canada', ABV: '57.1%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Empirical Spirits', bottle: 'Charlene McGee', region: 'Copenhagen, Denmark', ABV: '40%', age: '', notes: 'Peated Barly with Smoked Juniper Aged in Olorsor Casks', occasion: '', retired: ''  },
            { distillery: 'Empress 1908', bottle: 'Oaken Gin', region: 'Victoria, Canada', ABV: '42.5%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'FEW', bottle: 'Breakfast Gin', region: 'Illinois, USA', ABV: '42%', age: '', notes: 'Distilled with Earl Grey Tea', occasion: '', retired: ''  },
            { distillery: 'Highside Distiling', bottle: 'Gin', region: 'Washington, USA', ABV: '44%', age: '', notes: 'Uses distilled apples as its base', occasion: '', retired: ''  },
            { distillery: 'Jin Jiji', bottle: 'India Dry Gin', region: 'India', ABV: '43%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Orcas Island Distillery', bottle: 'Ferry Dock Genever', region: 'Washington, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Plymouth', bottle: 'Navy Strenght', region: 'Plymouth, UK', ABV: '57%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Rabbit Hole', bottle: 'Bespoke Gin', region: 'Kentucky, USA', ABV: '44.5%', age: '', notes: '', occasion: 'Yosi&#x27;s Bachelor Party', retired: ''  },
            { distillery: 'Raincity Distillery', bottle: 'Iron Buddah Gin', region: 'Squamish, Canada', ABV: '43%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Raincity Distillery', bottle: 'Last Garden Gin', region: 'Squamish, Canada', ABV: '43%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Rainier', bottle: 'Mountain Fresh Gin', region: 'Washington, USA', ABV: '40%', age: '', notes: 'It&#x27;s the water!', occasion: '', retired: ''  },
            { distillery: 'Uncle Val&#x27;s', bottle: 'Botanical Gin', region: 'California, USA', ABV: '45%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Windspiel', bottle: 'Premium Dry Gin', region: 'Eifel, Germany', ABV: '47%', age: '', notes: '', occasion: '', retired: ''  },
                                                    
        ]
    },
    amaro: {
        all: [
            { distillery: 'Benedictine', bottle: 'Benedictine', region: 'France', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Drillaud ', bottle: 'Creme de Mure', region: 'France', ABV: '15%', age: '', notes: '', occasion: '', retired: ''  },         
            { distillery: 'Letterpress Distilling', bottle: 'Amaro Amorino', region: 'Washington, USA', ABV: '32%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Letterpress Distilling', bottle: 'Amaro Amorino Riserva #3', region: 'Washington, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Fast Penny Spirits', bottle: 'Amaricano', region: 'Washington, USA', ABV: '30%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Highside Distiling', bottle: 'Amaro Mele', region: 'Washington, USA', ABV: '40%', age: '', notes: 'Apple spirit', occasion: '', retired: ''  },
            { distillery: 'Highside Distiling', bottle: 'Nocino', region: 'Washington, USA', ABV: '32%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Townshend&#x27;s', bottle: 'Pacific Northwest Fernet', region: 'Oregon, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'St. Germain', bottle: 'Elderflower Liquer', region: 'France', ABV: '20%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Arbutus Distllery', bottle: 'Birch Liqueur', region: 'Vancouver, Canada', ABV: '25%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Campari', bottle: 'Campari', region: 'Italy', ABV: '24%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Chartreuse', bottle: 'Green Chartreuse', region: 'France', ABV: '55%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Maraska', bottle: 'Maraschino Cherry Liqueur', region: 'Croatia', ABV: '32%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'St. George Spirits', bottle: 'Absinthe Verte', region: 'California, USA', ABV: '60%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Townshend&#x27;s', bottle: 'Smoke Tea Liqueur', region: 'Oregon, USA', ABV: '35%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Townshend&#x27;s', bottle: 'Sweet Tea Liqueur', region: 'Oregon, USA', ABV: '35%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Wildwood Spirits Co', bottle: 'Solgud', region: 'Washington, USA', ABV: '40%', age: '', notes: 'Orange and Herbal Liqueur', occasion: '', retired: ''  },
            { distillery: 'Martini and Rossi', bottle: 'Bianco Vermouth', region: 'Italy', ABV: '15%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Carpano', bottle: 'Antica Formula', region: 'Italy', ABV: '16.5%', age: '', notes: '', occasion: '', retired: ''  },
        ]
    },
    others: {
            agave: [
                { distillery: 'Bozal', bottle: 'Ensamble', region: 'Oaxaca, Mexico', ABV: '47%', age: '', notes: '', occasion: 'Ceramic Anniversary', retired: ''  },
                { distillery: 'Vago', bottle: 'Elote', region: 'Oaxaca, Mexico', ABV: '50%', age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Kirkland Signature', bottle: 'Añejo', region: 'Jalisco, Mexico', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                                                
            ],
            rum: [
                { distillery: 'KoHana', bottle: 'Kea - Hawaiian Agricole Rum', region: 'Hawaii, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Koloa', bottle: '12 Barrel Select', region: 'Kauai, USA', ABV: '46%', age: '4 Years', notes: '', occasion: '', retired: ''  },
                { distillery: 'Koloa', bottle: 'Kaua&#x27;i Coffee Rum', region: 'Kauai, USA', ABV: '34%', age: '', notes: '', occasion: '', retired: ''  },
                { distillery: 'Ten to One', bottle: 'Caribbean White Rum', region: 'Jamaica &amp; Dominican Republic', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                
            ], 
                brandy: [
                    { distillery: 'Orcas Island Distillery', bottle: 'Archipelago de Haro', region: 'Washington, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Remy Martin', bottle: 'VSOP', region: 'Cognac, France', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                    { distillery: 'Ritual Sister', bottle: 'Smoked Pineapple', region: 'New York, USA', ABV: '40%', age: '', notes: '', occasion: '', retired: ''  },
                   ]

    },
    retired: {
            all: [
                { distillery: 'Kavalan', bottle: 'Classic Single Malt', region: 'Taiwan', ABV: '40%', age: '', notes: '', occasion: '', retired: 'Jul-24'  },
                { distillery: 'Kavalan', bottle: 'Concertmaster - Sherry Cask', region: 'Taiwan', ABV: '40%', age: '', notes: '', occasion: '', retired: 'Jul-24'  },
                { distillery: 'Kavalan', bottle: 'Concertmaster - Port Cask', region: 'Taiwan', ABV: '40%', age: '', notes: '', occasion: '', retired: 'May-25'  },
                { distillery: 'Kavalan', bottle: 'King Car Conductor', region: 'Taiwan', ABV: '46%', age: '', notes: '', occasion: '', retired: 'May-25'  },
                { distillery: 'Kavalan', bottle: 'Oloroso Sherry Oak', region: 'Taiwan', ABV: '54%', age: '', notes: '', occasion: '', retired: 'May-25'  },
                { distillery: 'Kavalan', bottle: 'Port Oak', region: 'Taiwan', ABV: '54%', age: '', notes: '', occasion: '', retired: 'May-25'  },
                { distillery: 'Kirkland Signature', bottle: 'Highland 12 Year Single Malt', region: 'Highland', ABV: '46%', age: '12 Years', notes: '', occasion: '', retired: 'Aug-25'  },
                { distillery: 'Kirkland Signature', bottle: 'Islay Single Malt', region: 'Islay', ABV: '46%', age: '', notes: '', occasion: '', retired: 'Aug-25'  },
                { distillery: 'Kirkland Signature', bottle: 'Speyside 10 Year Single Malt', region: 'Speyside', ABV: '46%', age: '10 Years', notes: '', occasion: '', retired: 'Aug-25'  },

                                
            ]
        },

    hardcore: {
        all: [
            { distillery: 'Bainbridge Organic Distillers', bottle: 'Yama | Mizunara Cask Single Grain Whiskey', region: 'Bainbridge Island, WA', ABV: '43%', Age: '', notes: 'Aromatic sandalwood, tropical flowers, star anise, joss incense; flavors of nutmeg, clove, pear, marzipan, toasted coconut, yuzu; finishes with fading spice, honey, and oak', occasion: 'Rachel&#x27;s Retirement Gift 2023', retired: ''  },
            { distillery: 'Akkeshi', bottle: 'Hakuro - 2023 Release', region: 'Hokkaido, Japan', ABV: '55%', Age: '', notes: 'Hakuro is the heart of September, the 8th through the 22nd, when dewy summer nights embrace the last of summer’s vibrance', occasion: 'Potty Trained Sully + 10th Wedding Anniversary August 2025', retired: ''  },
            { distillery: 'Kavalan', bottle: 'Soloist Vinho Barrique Cask Strength', region: 'Taiwan', ABV: '58.6%', age: '', notes: 'Cask W170113031A', occasion: 'Denys Quit - July 2025', retired: ''  },
            { distillery: 'Kavalan', bottle: 'Soloist Solist ex-Bourbon Cask Strength', region: 'Taiwan', ABV: '58.3%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Michter&#x27;s', bottle: 'Toasted Barrel Bourbon', region: 'Kentucky, USA', ABV: '45.7%', Age: '', notes: '', occasion: 'Minos ASR - November 2024', retired: ''  },
            { distillery: 'Suntory', bottle: 'Hibiki 17', region: 'Japan', ABV: '43%', Age: '17 Years', notes: '', occasion: 'Christmas Present', retired: ''  },
        
            ]
    },

    new: {
        all: [
            { distillery: 'Westland', bottle: 'Peat Week 2026 - Mossfire Mason', region: 'Washington, USA', ABV: '50%', age: '6 Years', notes: 'Heavily Peated - Bairds Peated Malt from Scotland', occasion: '', retired: '', peated: '', cask: '', other: ''  },
            { distillery: 'Westland', bottle: 'Peat Week 2026 - Augustus MacHuff', region: 'Washington, USA', ABV: '50%', age: '8 Years', notes: 'Lightly Peated - WA Skagit Malting, With WA Peat', occasion: '', retired: '', peated: '', cask: '', other: ''  },           
            { distillery: 'Bruichladdich', bottle: 'The Classic Laddie', region: 'Islay', ABV: '50%', age: '', notes: '', occasion: '', retired: ''  },
            { distillery: 'Copperworks', bottle: 'Single Cask - Color Cask', region: 'Washington, USA', ABV: '50%', age: '4 Years 9 Months', notes: 'Aged in a 200 Year Old Sherry Color Cask', occasion: '', retired: ''  },
            { distillery: 'Copperworks', bottle: 'Single Cask - Letterpress Amaro', region: 'Washington, USA', ABV: '50%', age: '7 Years 1 Months', notes: '1 Month Finish in Amaro Amorino Riserva Cask', occasion: '', retired: ''  },
            { distillery: 'Copperworks', bottle: 'Single Cask - Pondera Cabernet', region: 'Washington, USA', ABV: '50%', age: '7 Years 7 Months', notes: '7 Month Finish in Pondera Cabernet Cask', occasion: '', retired: ''  },
            { distillery: 'Westland', bottle: 'Cask Exchange - Sons Of Vancouver', region: 'Washington, USA', ABV: '55.3%', age: '', notes: 'Finished in No 82 Amaretto Casks', occasion: '', retired: ''  },             
            { distillery: 'Kavalan', bottle: 'Soloist Solist ex-Bourbon Cask Strength', region: 'Taiwan', ABV: '58.3%', age: '', notes: '', occasion: '', retired: ''  },
        
            ]
    },


    beer: {
        all: [
            { distillery: 'Goose Island', bottle: 'Bourbon County Mon Cheri 2019', region: 'Chicago, Illinois', ABV: '14.1%', Age: '', notes: '', occasion: '', retired: ''  },
        ]
    },

};