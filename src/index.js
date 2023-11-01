import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.every()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.every

// - Exists on Array.prototype.every().
// - Tells whether every single element inside of an array passes a particular test, and that test it up to you.
// - TURE -> If EVERY element passes, once it's finished the loop.
// - FALSE -> If ONE element will fail.
// - The looping will stop after a first failing element. This is very good for performance.
// - syntax: const returnedValue = array.every((value, index, array) => {...}, thisArg);

const items = [
    { id: '🍔', name: 'Super Burger', price: 399, stock: true },
    { id: '🍟', name: 'Jumbo Fries', price: 199, stock: true },
    { id: '🥤', name: 'Big Slurp', price: 299, stock: false }
];

const isInStock = items.every((item) => item.stock);
if(!isInStock) {
    console.log(`Sorry, ${items.find((item) => ! item.stock).name} is out of stock`); // Sorry, Big Slurp is out of stock
}

// IMPERATIVE style
// let isInStock = true;
// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if(!item.stock) {
//         isInStock = false;
//         break;
//     }
// }
// if(!isInStock) {
//     console.log(`Sorry, ${items.find((item) => ! item.stock).name} is out of stock`); // Sorry, Big Slurp is out of stock
// }

console.log(items);