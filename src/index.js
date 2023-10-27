import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Shallow and Deep Array Cloning

const drinks = [['Lemonade', 99], ['Lime', 89], ['Peach', 79]];

// SHALLOW -> will go 1 level down, which means that it won't clone nested arrays, only the top level. That is why it will mutate nested elements in an array, even if we mutate values on a cloned array.
// 1. cloning with spread operator: ...drinks
// const drinksClone = [...drinks]; // this is a direct copy of the drinks array.
// we are inside our top level drinks.
// console.log(drinks[0]); // (2)['Lemonade', 99] -> accessing the first item of an array inside the array.
// console.log(drinks[0][0]); // Lemonade -> accessing the string.
// console.log(drinks[0][1]); // 99 -> accessing the number.

// looking how change effects arrays:
// drinksClone[0][1] = 100;
// console.log(drinksClone); // 0:(2) ['Lemonade', 100] ...
// console.log(drinks); // 0:(2) ['Lemonade', 100] ... -> the original array gets mutated as well, this is not good behavior that needs to be avoided.

// 2. cloning with slice()
// const drinksClone2 = drinks.slice(); // without passing any arguments, we clone the whole array.
// drinksClone2[0][1] = 100;
// console.log(drinksClone2); // 0:(2) ['Lemonade', 100] ...
// console.log(drinks); // 0:(2) ['Lemonade', 100] ... -> the original array gets mutated as well, this is not good behavior that needs to be avoided.

// 3. cloning with Array.from(object):
// const drinksClone3 = Array.from(drinks);
// drinksClone3[0][1] = 100;
// console.log(drinksClone3); // 0:(2) ['Lemonade', 100] ...
// console.log(drinks); // 0:(2) ['Lemonade', 100] ... -> the original array gets mutated as well, this is not good behavior that needs to be avoided.

// DEEP
const drinksClone = JSON.parse(JSON.stringify(drinks)); // need to parse it, because JSON.stringify() returns a string
drinksClone[0][1] = 100;
console.log(drinksClone); // 0:(2) ['Lemonade', 100] ...
console.log(drinks); // 0:(2) ['Lemonade', 99] ...