import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Iteration with Break and Continue

const drinks = ['Pepsi', 'Lemonade', 'Cola'];
let count = 0;

// for(new_variable; instruction how long we want to continue the loop; increment 0){}
for(let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if(drink === 'Lemonade') {
        console.log(`Pour me a glass`);
        // break;
        continue; // does things opposite to a break statement
    }
    count++; // incrementing count at any point in time
}

console.log(count); // 3 -> without_break; 1 -> with_break; 2 -> with_continue