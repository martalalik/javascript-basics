import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Destructuring Arrays

const drinks = [['Lemonade', 99], ['Lime', 89], ['Peach', 79]];

const [ drinkOne, drinkTwo ] = drinks; // because in an array doesn't have a property name instead we have indexes, so we can call them whatever, as long they are distracted in the correct order.
console.log(drinkOne, drinkTwo); // (2)['Lemonade', 99] (2) ['Lime', 89]

// destructing an array in an array
const [ one, [a, b], three ] = drinks;
console.log(a, b); // Lime 89
console.log(one, three); //  (2)['Lemonade', 99] (2)['Peach', 79]

// ...rest parameter -> will give us an array
const [ first, second, ...rest ] = drinks;
console.log(rest); // [Array(2)]
console.log(first, second); //  (2)['Lemonade', 99] (2)['Lime', 89]

// ignoring argument
const [ o, [, bb], ...r ] = drinks;
console.log(o, bb, r); // (2)['Lemonade', 99] 89 [Array(2)]

