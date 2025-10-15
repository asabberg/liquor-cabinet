// todays-menu.js

const todaysMenu = {
    food: [
        { name: "Charcuterie Board", description: "A selection of meats and cheeses." },
        { name: "Mini Quiches", description: "Assorted bite-sized quiches." }
    ],
    drinks: [
        { distillery: "Westland", bottle: "Colere 1st Edition", region: "Washington, USA", ABV: "50%", notes: "Made with Skagit Valley Malting Alba Barley" },
        { distillery: "Benedictine", bottle: "Benedictine", region: "France", ABV: "40%", notes: "" }
    ]
};

function showTodaysMenuFood() {
    const foodList = document.getElementById('food-list');
    if (!foodList) return;
    foodList.innerHTML = '';
    todaysMenu.food.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<div><strong>${item.name}</strong><br><em>${item.description}</em></div><br>`;
        foodList.appendChild(div);
    });
}

function showTodaysMenuDrinks() {
    const drinksList = document.getElementById('menu-drinks-list');
    if (!drinksList) return;
    drinksList.innerHTML = '';
    todaysMenu.drinks.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `<div><strong>${drink.bottle}</strong> by ${drink.distillery}<br>
            <em>Region:</em> ${drink.region}<br>
            <em>ABV:</em> ${drink.ABV}<br>
            ${drink.notes ? `<em>Notes:</em> ${drink.notes}<br>` : ''}</div><br>`;
        drinksList.appendChild(div);
    });
}

if (window.location.pathname.includes('todays-menu.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        showTodaysMenuFood();
        showTodaysMenuDrinks();
    });
}
