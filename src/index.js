import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// String In-Depth
// ----------------------------------------------------------------

// String Properties and Indexes

// Accessing property length
console.log(new String(5599).length); // 4
console.log('Pepperoni'.length); // 9 -> why enter length property on a string? Many reasons, check if someone entered a credit card number. Checking length property validate amount of numbers.
// or Finding the last character in a string:
// how to access first character
console.log('Pepperoni'['length']); // 9
console.log('Pepperoni'[length]); // 'P'
console.log('Pepperoni'[0]); // 'P' - we can pass 0 as a number or a string. Number get converted to a string, and then will give back first property. Using numeric value is preferable.
console.log('Pepperoni'['0']); // 'P'

// how to access last character
const pizza = 'Pepperoni';
const pizza2 = 'P e p p e r o n i';
console.log(pizza[0]); // 'P'
console.log(pizza.length); // 9
console.log(pizza[pizza.length]); // undefined -> this happens because indexes are 0 based. pizza.length gives 9, so 9 won't exist (0-8).
console.log(pizza[pizza.length -1]); // 'i' -> -1 is a fix, will gives 8.
console.log(pizza.charAt(0)); // 'P' -> alternative for getting first character, but [] are preferred. No need to call method on a string.
console.log(pizza2.length); // 17 spaces also count as a length property.


