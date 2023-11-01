import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.find()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.every

// - Exists on Array.prototype.find().
// - Searches array and returns the first matching element, or rule undefined return, if it can't find a matching element.
// - It returns any JS type.
// - Think: find a particular element in an array.
// - find() is similar with filter() -> in the way that we could filter out anything that we don't want. I want to find a particular item.
// - DIFFERENCE between filter() & find() -> filter() returns MULTIPLY VALUES; find() returns ONE VALUE just after it is found.
// - syntax: const returnedValue = items.find((value, index, array) => {...}, thisArgument)

const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

const found = items.find((item) => item.id === '🍟');
console.log(found); // {id: '🍟', name: 'Jumbo Fries', price: 199}
if(found) {
    console.log(`${found.name} ${(found.price / 100).toFixed(2)}`); // Jumbo Fries 1.99
}

// IMPERATIVE style
// let found; // undefined -> we are not assigning any value to this let statement on runtime
// for(let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if(item.id === '🍟') {
//         found = item;
//         break; // REMEMBER!!! boost performance
//     }
// }
// if(found) {
//     console.log(`${found.name} ${(found.price / 100).toFixed(2)}`); // Jumbo Fries 1.99
// }

console.log(items); // (3)[{…}, {…}, {…}]