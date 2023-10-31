import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Iteration with for…of


const drinks = ['Pepsi', 'Lemonade', 'Cola'];

// FOR loop
// - ITERABLE -> here in the for look, we're just incrementing. And then using an array index
for(let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]); // Pepsi Lemonade Cola
}

// FOR...OF loop
// - Cleaner then for loop, and it works a bit different
// - use "const", so no mutation is performed.
// - can iterate over strings, map sets, node lists, arrays.
for(const drink of drinks) {
    console.log(drink); // Pepsi Lemonade Cola
}


