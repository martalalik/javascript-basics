import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Declarative Object Iteration

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// Object.keys(object)
// console.log(Object.keys(drink)); // (3) -> array of all top level keys, but it does shallow iteration, it won't go deep into price. It doesn't look at the [[Prototype]], so it won't return any inherited properties.
// because Object.keys(drink) returns array we can use forEach. This is a declarative way that we can iterate over a drink object.
// Object.keys(drink).forEach(function(prop, index) {
//     console.log(prop); // id name price
//     console.log(index); // 0 1 2
// });
Object.keys(drink).forEach(function(prop) {
    console.log(drink[prop]); // qwe123 Lemonade {sale: 99, full: 129} -> getting values, no inherit values
});
// arrow function
Object.keys(drink).forEach(prop => console.log(drink[prop]));

// Object.entries(object)
console.log(Object.entries(drink)); // 0:(2) ['id', 'qwe123'] 1:(2) ['name', 'Lemonade'] 2:(2) ['price', {…}] -> returns array of arrays