import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Parsing Strings to Numbers

// parseInt(s: string, radix?: number): number
console.log(parseInt('55px')); // 55
console.log(parseInt('55px', 10)); // 55 -> golden rule is to pass `10` -> the number is passed with a base 10 and returns an integer that we're expecting.
console.log(parseInt('55.9999px', 10)); // 55

// parseFloat(s: string): number
console.log(parseFloat('55.9999px')); // 55.9999
console.log(parseFloat('55.9999px') * 10 ); // 559.999

// Number()
console.log(Number('55e10')); // 550000000000 -> e: is a floating point number representation.
// These aren't typically things that we would declare ourselves,
// but we might get them as a value.
// When we dealing with huge in JS, in this 'e' stands for exponent.
// 10: it is 10 zeroes, 'e' adding 10 zeroes
console.log(Number('55.9999px')); // NaN
console.log(Number('55.9999')); // 55.9999 - it does the same thing as parseFloat()

// using operator to convert string to a number
console.log(+'99.5555'); // 99.5555 - acting as Number()
console.log(9 + +'99.5555'); // 108.5555 - this is confusing, adding 9 to right expression.
