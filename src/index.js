import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Removing Object Properties

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// delete - key word, only one way to delete property PERMANENTLY, but it is a SLOW way to do it, if we want to delete many properties.
// delete drink.id;
// console.log(drink); // {name: 'Lemonade', price: {…}}
// we have to be mindful with the key word "delete"
// console.log(drink.hasOwnProperty('id')); // false -> property "id" is permanently deleted

// better PERFORMANCE
drink.id = undefined;
// console.log(drink); // {id: undefined, name: 'Lemonade', price: {…}} -> id still exists but the property is undefined
console.log(drink.hasOwnProperty('id')); // true -> property "id" is still existing, the value changed to undefined
//
// // checking if thr property exists
// if(drink.id) {
//     console.log('Has ID...'); // never came here because id is undefined
// }

// DESTRUCTURING -> another way to delete property - IMMUTABLE PATTERN
const { price, ...rest} = drink;
console.log(price, rest); // {sale: 99, full: 129} {id: undefined, name: 'Lemonade'} -> price hasn't been deleted really, the drink object still remains intact.