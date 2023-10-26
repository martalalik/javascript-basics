import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Adding Array Elements

const drinks = ['Lemonade', 'Lime', 'Peach'];

// MUTATING EXISTING ARRAY - it is not a good approach because arrays are passed by reference. It mutates original array drinks.

// BEGINNING unshift() -> adds elements at the beginning of an array
// drinks.unshift('Water');
// console.log(drinks); // (4)['Water', 'Lemonade', 'Lime']

// MIDDLE splice() -> removes elements from an array and, if necessary, inserts new elements in their place.
const index = 1; //
// drinks.splice(index, 0, 'Cola');
// console.log(drinks); // (4)['Lemonade', 'Cola', 'Lime', 'Peach']

// END push() -> adds the specified elements to the end of an array
// drinks.push('Cola');
// console.log(drinks); // (5)['Water', 'Lemonade', 'Lime', 'Cola']

// IMMUTABLE -> expecting a new array back. We copy the original array and mutate copy of that array
// BEGINNING & END
const newDrinks = ['Water', ...drinks, 'Cola']; // copy drinks to new drinks and adds a new element
// console.log(newDrinks); // (4)['Water', 'Lemonade', 'Lime', 'Peach', 'Cola']

// RESTING an array
newDrinks.length = 0;
// console.log(newDrinks); // []

// MIDDLE
// we are cutting the array in half
console.log([
    ...drinks.splice(0, index), // ['Lemonade'] -> 0: capture the beginning of the array; index: deleting everything after a first element
    'Mojito', // adding an element in the middle
    ...drinks.splice(index -1) // (3)['Lemonade', 'Lime', 'Peach']
]); // (4)['Lemonade', 'Mojito', 'Lime', 'Peach']

console.log(drinks); // (3)['Lemonade', 'Lime', 'Peach'] -> when immutable, it shows that array is not touched

