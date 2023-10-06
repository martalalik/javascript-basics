import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Functions and “this”
// FUNCTION CONTEXT, word context is somewhat dependent on the word of "this".
// STRICT MODE -> it looks like it is a piece of text at the top of the file or scope that says use strict.
// 'use strict';
// function carPartID () {
//     console.log(this); // undefined
// }
// carPartId();

// If we want to go out of the safety net that the strict mode gives us, what we can do is comment out the whole thing and go to index.html and paste the function there.

//
const firstCar = {id: '123qwe'};
const secondCar = {id: 'qwe123'};
const thirdCar = {id: '098poi'};
function carPartID (name, quantity) {
    // console.log(`${this.id}`); // prints ids
    // console.log(`${this}`); // [object Object] because is in the string
    // console.log(this); // {id: '123qwe'} and {id: 'qwe123'}
    // for apply()
    console.log(`${this.id}_${name}_${quantity}`);
}
// here we change a context when we execute the function
// By using call() we change the meaning of "this" based on what is supply as the first argument.
// when console.log(`${this.id}`);
// carPartID.call(firstCar); // 123qwe
// carPartID.call(secondCar); // qwe123
// apply() has different arguments then call():
// call = c = commas
// apply = a = array
// when console.log(`${this.id}_${name}`);
// carPartID.call(firstCar); // 123qwe_undefined
// carPartID.apply(secondCar); // qwe123_undefined -> does the same what call(), however we use call() anyway.
// carPartID.call(firstCar, 'Left Door'); // 123qwe_Left Door
// carPartID.apply(secondCar, 'Right Door'); // error -> will break, because we need to supply an array
// carPartID.apply(secondCar, ['Right Door']); // qwe123_Right Door
// when console.log(`${this.id}_${name}_${quantity}`);
carPartID.call(firstCar, 'Left Door', 12); // 123qwe_Left Door_12
carPartID.apply(secondCar, ['Right Door', 21]); // qwe123_Right Door_21

// Different way to change the context, by creating a bound function, instead calling it whenever we like to.
// with thirdCar
// bind() -> will return as a brand-new function that is already set up in context. This is LAZY approach where we want to execute the function later on in time or even execute it multiple times with the same context.
// This is the way to go when we want to reuse function.
const boundThirdCar = carPartID.bind(thirdCar);
console.log(boundThirdCar); // getting a concatenation version, returned function of boundThirdCar
boundThirdCar('Windscreen', 99); // 098poi_Windscreen_99 -> calling a function, this is enough to do so.
boundThirdCar('Exhaust', 88); // 098poi_Exhaust_88 -> context is bind, so it won't change.