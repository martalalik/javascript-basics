import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Merging Arrays

const drinks = [['Lemonade', 99], ['Lime', 89]];
const newDrinks = [['Peach', 79]];
const simpleDrinks = ['Peach', 79];

// OLD WAY
// concat(): (string | number)[][] -> method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. Immutable way to merge arrays.
// const merge = drinks.concat(newDrinks);
// console.log(merge); // (3)[Array(2), Array(2), Array(2)]
// console.log(drinks); // (2)[Array(2), Array(2)]
// console.log(newDrinks); // [Array(2)]

// NEW WAY
// ... : spread operator
const merge2 = [...drinks, ...newDrinks];
console.log(merge2); // (3)[Array(2), Array(2), Array(2)]
console.log(drinks); // (2)[Array(2), Array(2)]
console.log(newDrinks); // [Array(2)]
// merging multidimensional array with a one-dimensional array -> we want merge the value of one-dimensional array not the initial array
const merge3 = [...drinks, simpleDrinks]; // by removing ...
const merge4 = [simpleDrinks, ...drinks]; // you can swap order
console.log(merge3); // (3)[Array(2), Array(2), Array(2)], Peach at the end
console.log(merge4); // (3)[Array(2), Array(2), Array(2)], Peach at the beginning