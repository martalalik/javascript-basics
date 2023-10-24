import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Shallow and Deep Object Cloning
// The concept of shallow and deep cloning means that we are a shallow cloning with Object.assign.

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// - Objects are pass by REFERENCE
// const drinkReference = drink;
// drinkReference.id = 'abc';
// console.log(drink); // {id: 'abc', name: 'Lemonade', price: {…}} -> it updated the original object - we don't want this behavior.

// SHALLOW COPY with Object.assign() -> is cloning everything on a top level object.
// - creating a copy of this drink object with:
// 1. Object.assign() -> will merge objects from right to left, therefore, we create a new object literal - Object.assign({}, drink) and merge drink into it. Merge all my drink properties in to {}.
// const drinkClone = Object.assign({}, drink);
// const drinkCloneOneProperty = Object.assign({}, drink.id); // merging just one property
// drinkClone.id = 'abc';
// drinkClone.price.sale = 79;
// console.log(drink); // {id: 'qwe123', name: 'Lemonade', price: {…}} -> drinks id is not effected, this is exceptional behavior, by coping an object to another, so now we can act on it, without an effecting the original object.
// console.log(drink); // {id: 'qwe123', name: 'Lemonade', price:{sale: 79, full: 129}} -> the sale value changed, which means we didn't clone deep, so the price is passed by reference.
// 2. {...object} spreed operator -> new way to shallow clone, shorthand for Object.assign({}, object)
// const drinkClone = {...drink}; // this will copy all the values across into the new object.
// drinkClone.id = 'abc';
// drinkClone.price.sale = 79;
// console.log(drink); // {id: 'qwe123', name: 'Lemonade', price:{sale: 79, full: 129}}

// DEEP COPY
// JSON.stringify();
// JSON.parse();
// JSON (js object notation) - it is a format of transferring JS data to server. And typically is data that we want to serialize. So functions that may be on an object are not serializable, which means we can't serialize them to JSON. This approach is the only way natively without writing lots of code and logic, that we can create a guaranteed deep clone.
const drinkStringified = JSON.stringify(drink);
// before creating drinkClone
// console.log(drinkStringified); // {"id":"qwe123","name":"Lemonade","price":{"sale":99,"full":129}} -> returned in JSON format, all of it is a string. JSON required "" around properties and their values, beside a number. But it won't tha a function, it will be ignored.
const drinkClone = JSON.parse(drinkStringified);
// console.log(drinkClone); // {"id":"qwe123","name":"Lemonade","price":{"sale":99,"full":129}} -> is back as an object (before changing property value)
drinkClone.id = 'abc';
drinkClone.price.sale = 79;
console.log(drink); // {"id":"qwe123","name":"Lemonade","price":{"sale":99,"full":129}}