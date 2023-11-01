import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.some()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.some

// - Exists on Array.prototype.some().
// - Tells whatever any element in our array passes a particular test, then will give true, otherwise false.
// - Think: I want to check if any of my values in my array meet a specific condition. Either one of some values needs to pass to get tru in return.
// - Doesn't modify the array.
// - It returns only boolean.
// - syntax: const returnedValues = array.some((value, index, array) => {...}, thisArg);
// - It will loop through the array and do the checking on each value of an array.

const items = [
    { id: '🍔', name: 'Super Burger', price: 399, promo: false },
    { id: '🍟', name: 'Jumbo Fries', price: 199, promo: false },
    { id: '🥤', name: 'Big Slurp', price: 299, promo: true }
];

const isInPromo = items.some((item) => item.promo);
console.log(isInPromo); // true

// getting discount on products, when buy all and drinks in under promo
// 1. find if there is anything in promo -> which we did with isInPromo
// 2. getting a correct price.
const total = isInPromo ? 600 : items.reduce((prev, next) => prev + next.price, 0);
console.log(total); // 600

// IMPERATIVE style
// let isInPromo = false;
// for(let i = 0; i< items.length; i++) {
//     const item = items[i];
//     if(item.promo) {
//         isInPromo = true;
//         break;
//     }
// }
// const total = isInPromo ? 600 : items.reduce((prev, next) => prev + next.price, 0);
// console.log(total); // 600

console.log(items);