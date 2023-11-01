import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.filter()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.filter

// - Array.filter() -> it's a method that exists on Array.prototype.filter().
// - Allows CONDITIONALLY RETURN certain elements from an array into a brand-new array.
// - It's a commonly use to REMOVES ITEMS from an array, by simply excluding them from the result; I want a new array just containing the items that I need.
// - RETURN an expression that filter() evaluates to either false or true.
// - Callbacks returns an expression that evaluates to true of false.
// - TRUE -> array elements that evaluate to true are stored in the new array.
// - FALSE -> array elements that evaluate to false are excluded from the new array.
// - Once the filter() has completed, you can access the new array of values.
// - Syntax: const returnedValues = array.filter((value, index, array) => {...}, thisArg);
// - You can think about filter() sa a FUNCTIONAL IF STATEMENT -> if my array element, meets a particular criteria, we can ask for a copy of it back.
const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

const expensiveItems = items.filter((item) => item.price > 199);
console.log(expensiveItems); // (2)[{…}, {…}] -> new array
console.log(items); // (3)[{…}, {…}, {…}] -> untouched

// old way of doing the same as filter()
// const expensiveItems = [];
// for(let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if(item.price > 199){
//         expensiveItems.push(item);
//     }
// }
// console.log(expensiveItems); // (2)[{…}, {…}] -> new array
// console.log(items); // (3)[{…}, {…}, {…}] -> untouched