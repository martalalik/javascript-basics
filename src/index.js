import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Adding and Updating Object Properties

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// update existing property
// drink.name = 'Peach';
// console.log(drink.name); // Peach

// adding new property
// drink.brand = 'My Drinks Co.';
// console.log(drink); // {id: 'qwe123', name: 'Peach', price: {…}, brand: 'My Drinks Co.'}

// function to update and add property
function propUpdate(prop, value) {
    drink[prop] = value; // drink[prop] -> checks if property does exist, it's going to look up to the object and if property exists will update the value on that property, if property doesn't exist, it will create a new property.
}

propUpdate('brand', 'My Drinks Co.');
propUpdate('name', 'Peach');
console.log(drink); // {id: 'qwe123', name: 'Peach', price: {…}, brand: 'My Drinks Co.'}
