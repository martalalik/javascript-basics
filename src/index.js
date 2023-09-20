import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// String In-Depth
// ----------------------------------------------------------------

// Exploring String Methods

console.log(String.prototype); // String {all Strings properties}

// indexOf(searchString: string, position?: number): number -> detecting whether something exists in a particular string or not, is case-sensitive.
console.log('Pepperoni'.indexOf('P')); // 0 -> what is the index of the letter P.
console.log('Pepperoni'.indexOf('z')); // -1 -> doesnt exist.
// is good to use in conditional statements
// if('Pepperoni'.indexOf('P') !== -1){}

// includes(searchString: string, position?: number): boolean -> ES2015 method, checks if character exists or not.
console.log('Pepperoni'.includes('P')); // true

// replace(searchValue: string | RegExp, replaceValue: string): string
console.log('Pepperoni'.replace('oni', 'fire')); // 'Pepperfire' with string
console.log('Pepperoni'.replace(/oni$/, 'fire')); // 'Pepperfire' with regex

// slice( start?: number, end?: number): string
console.log('Pepperoni'.slice(2, -1)); // 'pperon' -> by using negative number, it's going to the end of the string and then coming backwards.
console.log('Pepperoni'.slice(0, -1)); // 'Pepperon'
console.log('Pepperoni'.slice(0, 1)); // 'P' -> changing to positive 1, this starts at the beginning of the string.
// So we're saying, i want to slice everything from index of zero, all the way through to index of one, which is just one step forward, so it gives letter 'P'
console.log('Pepperoni'.slice(0, 'Pepperoni'.length -1)); // 'Pepperon' -> this is alternative for slice of last character, alternative to slice(0, -1)

// split( separator: string | RegExp, limit?: number): string[] - splitting string and accessing remains of the value.
console.log('Pepperoni~Plain'.split('~')); // ['Pepperoni', 'Plain'] 0: "Pepperoni" 1: "Plain" -> we get array, slice() takes either side of special character, ~ -> adding squiggly line, in JS called bitwise operator, inside a string doesn't mean anything.
console.log('Pepperoni~Plain'.split('~')[0]); // 'Pepperoni' -> we can use [] brackets on an array, now we get row value
console.log('Pepperoni~Plain'.split(/~/)[1]); // 'Plain' -> takes regex

// trim(): string - removes whitespace from both ends of a string.
console.log('   4444 5555 6666 7777   '.trim()); // 4444 5555 6666 7777 -> no spaces around the string, it is important when using .lenght on a string
console.log('   4444 5555 6666 7777   '.length); // 25
console.log('   4444 5555 6666 7777   '.trim().length); // 19
console.log('   4444 5555 6666 7777   '.trim().replace(/ /g, '')); // 4444555566667777 -> here we perform chaining
console.log('   4444 5555 6666 7777   '.replace(/ /g, '')); // 4444555566667777 -> trim() won't be needed here because with flag g-global replace takes all white spaces.

// repeat(count: number): string - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log('Pepperoni'.repeat(2)); // PepperoniPepperoni

// padEnd( maxLength: number, fillString?: string): string - pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
console.log('Pepperoni'.padEnd(12, '.')); // Pepperoni...

// padStart(maxLength: number, fillString?: string): string -  pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
console.log('Pepperoni'.padStart(12, '.')); // ...Pepperoni

// substring(start: number, end?: number): string - returns the part of the string between the start and end indexes, or to the end of the string.
console.log('Pepperoni'.substring(1, 3)); // 'ep'
console.log('Pepperoni'.slice(1, 3)); // 'ep'
// Methods substring() & slice() are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.
// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.
console.log('Pepperoni'.substring(5, 2)); // 'ppe'
console.log('Pepperoni'.slice(5, 2)); // ''
// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
console.log('Pepperoni'.substring(-5, 2)); // 'Pe'
console.log('Pepperoni'.substring(-5, -2)); // ''
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.
console.log('Pepperoni'.slice(-5, 2)); // ''
console.log('Pepperoni'.slice(-5, -2)); // 'ero'
