import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Properties, Indexes and Elements

// ELEMENTS - things that we put in an array
const drinks = ['Lemonade', 'Lime', 'Peach'];

// INDEXES
// accessing arrays elements by using indexes lookups
console.log(drinks); // 0:"Lemonade" 1:"Lime" 2:"Peach" -> array elements are indexed in order in the same way that strings also are.
console.log(drinks[0]); // Lemonade -> use number format
console.log(drinks['0']); // Lemonade

// accessing LAST ELEMENT in the array
console.log(drinks); // 0:"Lemonade" 1:"Lime" 2:"Peach" length:3
console.log(drinks[drinks.length - 1]); // 2:"Peach" -> this approach is dynamic

// accessing an item and replace the value
drinks[0] = 'Diet Lemonade';
console.log(drinks); // (3)['Diet Lemonade', 'Lime', 'Peach']

// we can use string to set values in the array using words instead of numbers
// drinks['favourite'] = 'Cola'; // here we also added a property 'favourite'. Avoid using this because it looks like an object, and maybe it should be and when we reset an array drinks.length = 0, the favourite:"Cola" will still exist on the array.
// console.log(drinks); // ['Diet Lemonade', 'Lime', 'Peach', favourite: 'Cola'] -> arrays are a special type of object, has properties which are 0, 1, 2, favourite

// RESET & EMPTY an array
// 1. length - preferred
// drinks.length = 0; // resetting array
// console.log(drinks); // favourite:"Cola" (when favourite:"Cola") / []
// 2. splice() -> removes elements
drinks.splice(0, drinks.length); // 0 -> it starts at the front of the array. drinks.length -> as many items as that are in the length
console.log(drinks); // []
//