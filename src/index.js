import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Removing Array Elements

const drinks = ['Lemonade', 'Lime', 'Peach'];

// MUTABLE - it is not a good approach because arrays are passed by reference. It mutates original array drinks.
// BEGINNING - shift() -> method removes the first element from an array and returns that removed element. This method changes the length of the array.
// 1.
// const removed = drinks.shift();
// console.log(removed); // Lemonade
// 2.
// drinks.shift();
// console.log(drinks); // Lemonade

// MIDDLE

// END pop() -> method removes the last element from an array and returns that element. This method changes the length of the array.
const removedEnd = drinks.pop();
console.log(removedEnd); // Peach

// IMMUTABLE -> expecting a new array back. We copy the original array and mutate copy of that array
// slice() -> remove an item from anywhere in array
// 1. without defined index
// const newDrinks = [
//     ...drinks.slice(0, 0),
//     ...drinks.slice(1)
// ];
// console.log(newDrinks); // (2)['Lime', 'Peach']
// 2. with defined index
// const index = 0;
// const newDrinks = [
//     ...drinks.slice(0, index),
//     ...drinks.slice(index + 1)
// ];
// console.log(newDrinks); // (2)['Lime', 'Peach']
// 3. end
// const index = drinks.length -1;
// const newDrinks = [
//     ...drinks.slice(0, index),
//     ...drinks.slice(index + 1)
// ];
// console.log(newDrinks); // (2)['Lemonade', 'Lime']

console.log(drinks); // (3)['Lemonade', 'Lime', 'Peach'] -> when immutable, it shows that array is not touched

