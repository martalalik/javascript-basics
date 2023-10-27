import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Imperative Array Iteration

const drinks = ['Pepsi', 'Lemonade', 'Cola'];

// for(new_variable; instruction how long we want to continue the loop; increment 0){}
for(let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if(drink === 'Lemonade') {
        console.log(`Pour me a glass`);
    }
}