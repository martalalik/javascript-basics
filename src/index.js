import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Function Parameters and Defaults

// declaring a function
// name = parameter!!! -> is on the receiving end of the function!!!
// 3: new feature in JS and preferable to assign default value to the parameter!!!
function makeCar(name = 'Fiat') {
  // adding conditional checks is a part of function design.
  // 1:
  // name = name || 'Fiat';
  // 2:
  // if(!name) {
  //   name = 'Fiat';
  // }
  console.log(`Making car: ${name.toUpperCase()}`);
}

// using the function
// strings passed to the function are arguments!!!
makeCar('Porsche');
makeCar('Ferrari');
makeCar(); // Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase') -> the name parameter is undefined. To be safe it is good to create conditional checks.
makeCar(''); // Fiat - with condition 1, 2 in place. '' -> when assign default value to the parameter.
