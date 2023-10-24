import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Correctly Type-Checking Objects

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// typeof
console.log(typeof drink); // object
console.log(typeof []); // object -> array is a special type of object
console.log(typeof null); // object

// instanceof
console.log({} instanceof Object); // true
console.log([] instanceof Object); // true
console.log(null instanceof Object); // false

// Object.prototype.toString.call(object) -> strictly checking for an object, bulletproof type checking
console.log(Object.prototype.toString.call(drink)); // [object Object]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(null)); // [object Null]

// power of using function to type checking
function getType(obj) {
    return Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLowerCase();
}
console.log(getType(drink)); // object
console.log(getType([])); // array
console.log(getType(null)); // null