import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Merging Objects

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
};

const price = {
    sale: 99,
    full: 129
};

// 1. Object.assign({}, object, object, ...) -> in {} you can hardcode some values {id: 'abc'}
// const mergedDrink = Object.assign({}, drink, price)
// console.log(mergedDrink); // {id: 'qwe123', name: 'Lemonade', sale: 99, full: 129}
// to get price parameter
// const mergedDrink = Object.assign({}, drink, { price }); // {price} -> creating a new object with ES2015 syntax.
// console.log(mergedDrink); // {id: 'qwe123', name: 'Lemonade', price: {sale: 99, full: 129}}

// 2. SPREAD OPERATOR ...object
const mergedDrink = {...drink, ...{price}};
console.log(mergedDrink); // {id: 'qwe123', name: 'Lemonade', price: {sale: 99, full: 129}}
