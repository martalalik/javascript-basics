import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Destructuring Object Properties

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};
const myDrinkId = drink.id;
const myDrinkName = drink.name;
const myDrinkSalePrice = drink.price.sale;
console.log(myDrinkId);
console.log(myDrinkName);
console.log(myDrinkSalePrice);

// Destructuring - works for objects and arrays -> allows creating dynamic variable
// const { id, name, price} = drink;
// console.log(id, name, price);
// getting access to a nested object
// const { id, name, price: {full}} = drink;
// console.log(id, name, full);

// if you want to rename any properties that exist, we do after we have destructed.
// const id = 1234;
// const { id: myId, name, price: {full}} = drink;
// console.log(id, myId, name, full); // 1234 'qwe123' 'Lemonade' 129

// further destruction
// const { full, sale } = drink.price;
// console.log(full, sale); // 129 99

// Spread Operator -> ...rest -> always at the end
const { id: myId, price: {full}, ...rest} = drink;
console.log(myId, full, rest); // qwe123  129 {name: 'Lemonade'}