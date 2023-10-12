import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Object Literal, Function and Constructor Syntax
// - Almost everything is an object in JS.
// - Object stores a keyed collection.
// - Object has an unordered collection, where we can use key and value pairs to access the data that we want.

// Object Literal - most recommend way to define an object
const drink = {}; // new object is created
console.log(drink); // {} -> it contains a prototype which ian object to with methods, which exist on this global object.

const drink2 = {
    id: '123qwe',
    name: 'Lemonade',
    price: 99
}; // this is stored in memory of JS of our app
console.log(drink2); // shows content of the object, name: 'Lemonade'.

// Difference between primitive values and object - OBJECTS ARE PASSED BY REFERENCE!!! - so if any reference will be changed, it's going to go all the way back to the beginning and change the initial object reference.
const drinkReference = drink2; // the object is passed by reference
drinkReference.name = 'Peach'; // we didn't change an object itself, because we have deliberately called it a reference.
console.log(drink2); // name: 'Peach'
console.log(drink2 === drinkReference); // true -> checking if this two objects are equal. In JS, two objects are never the same, unless they are in fact the same object.
console.log({} === {}); // false -> shows how two objects are never the same, unless, they are the same as in drink2 === drinkReference

// Function and Constructor Syntax
console.log(new Object()); // {} - object literal is returned, [[Prototype]]: Object
console.log(Object()); // {} - object literal is returned, does exactly the same as new Object()
console.log(new Object() instanceof Object); // true
console.log(Object() instanceof Object); // true -> Object() on its own, calls new Object internally.
console.log({} instanceof Object); // true
// Looking at the number
console.log(new Number() instanceof Number); // true
console.log(Number() instanceof Number); // false -> Number() is not an instance of Number