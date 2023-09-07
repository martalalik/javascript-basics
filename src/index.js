import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Numbers and Immutability

const immutableNumber = 99;
let referencedNumber = immutableNumber;
referencedNumber = 44; // this doesn't touch the real value of immutableNumber. 99 is never touched in this process
// This is by design, because JS numbers are copied via their value. They're not essentially referenced, but we're making it look like they are referenced.
// const key word has nothing to do about it, const simply means that we cannot reassign the value -> immutableNumber = 44 - error
console.log(immutableNumber);
console.log(referencedNumber);
console.log(immutableNumber + 3); // 102 - but still we do not chane value of 99 because we passing primitive value by reference

