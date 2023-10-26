import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Multi-dimensional Arrays

// - Multi-dimensional Array is array in an array [[]]

// ELEMENTS - things that we put in an array
const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 79]];
console.log(drinks); // (3)[Array(2), Array(2), Array(2)]

// ACCESSING inner array
const drinkOne = drinks[0];
const drinkTwo = drinks[1];
const drinkThree = drinks[2];
console.log(drinkOne); // (2)['Lemonade', 99]
console.log(drinkTwo); // (2)['Lime', 99]
console.log(drinkThree); // (2)['Peach', 79]
// login out the value
console.log(`Drink: ${drinkOne[0]}, Price: ${drinkOne[1]}`); // Drink: Lemonade, Price: 99
// getting value direct from drinks
console.log(`Drink: ${drinks[0][0]}, Price: ${drinks[0][1]}`); // Drink: Lemonade, Price: 99

