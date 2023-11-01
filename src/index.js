import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.map()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.map
// for BIG PROBLEMATIC, DATA STRUCTURE!!!

// DECLARATIVE style -> telling what to do.
// - map() -> is a method that exists on array prototype.
// - Allows to loop over an array and access each individual item much like a forEach. However, we can return newVALUES or newTYPES of the values for each item in array.
// - Avery item that is returned it will give NEW ARRAY -> containing new copies or changes of each array element. You can return specific property as a new array.
// - map() is a common solution to deal with lots of data structure problems. it allows a value of any type from primitive to objects, giving some great flexibility in the programming.
// - Syntax: const returnedValue = items.map((value, index, array) => {...need to RETURN something}, thisArg);
// - Using array.map() is called an IMMUTABLE PATTERN. As it creates a new array from an existing array. halfOffFries has nothing to do with items array.

const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

const halfOffFries = items.map((item) => {
    if(item.id === '🍟'){
        return {
            ...item, // with ... operator we are getting the whole object
            price: item.price / 2
        };
    }
    // to fix undefined for a first and last element of an array, return item;
    return item;
});

console.log(halfOffFries); // 0: undefined 1:{..., price: 99,5} 2:undefined -> without return item; // 0: {} 1:{..., price: 99,5} 2:{} -> with return item;

// IMPERATIVE style -> explaining how to do it.
// const halfOffFries = [];
// for(let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if(item.id === '🍟'){
//         halfOffFries.push({
//             ...item,
//             price: item.price / 2,
//         });
//     } else {
//         halfOffFries.push(item);
//     }
// }
// console.log(halfOffFries);