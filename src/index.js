import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.forEach()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.forEach

// - forEach - is a method that exists on [[prototype]].
// - array.forEach is more of an entry level looping tool that will iterate over your array.
// - thinking of array.forEach is: I want to access my values in my array, one by one so that we can do something with them.
// - syntax: items.forEach((value, index, array) => {...});
// - doesn't return anything.
// - allows to log out each item in any we that is chosen.
// no "break" statement can be used.
// no "continue" statement can be used.
const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

items.forEach((item) => {
    app.innerHTML += `
        <li>
            ${item.id} ${item.name} ${(item.price / 100).toFixed(2)}
        </li>
    `;
});

// IMPERATIVE way of iterating
// - for loop that mimics forEach loop behavior.
// for(let i = 0; i < items.length; i++) {
//     const item = items[i];
//     app.innerHTML += `
//         <li>
//            ${item.id} ${item.name} ${(item.price / 100).toFixed(2)}
//         </li>
//     `;
// }

