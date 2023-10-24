import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Imperative Object Iteration

// const drink = {
//     id: 'qwe123',
//     name: 'Lemonade',
//     price: {
//         sale: 99,
//         full: 129
//     },
// };

// - There is no guarantee that the loops will iterate through an object in order.
// - Objects are for unordered data structure.

// looking up into each property
// for...in
// for (const prop in drink) {
    // console.log(prop); // id name price
    // accessing the value of property
    // console.log(drink[prop]); // id qwe123 name Lemonade price {sale: 99, full: 129}
    // for (const key in drink[prop]) {
    //     console.log(key); // 0 1 2 3 4 5 0 1 2 3 4 5 6 7 sale full -> all the indexes are printed, 0-5 for "qwe123" has 6 characters; 0-7 for "Lemonade" has 8 characters.
    // }

    // avoiding printing indexes
    // 1. typeof
    // if(typeof drink[prop] !== 'string') { // do not print anything that matches a string
    //     for (const key in drink[prop]) {
    //         console.log(key); // sale full
    //     }
    // }
    // 2. Object.prototype.toString.call(object) -> much safer way!!!
    // if(Object.prototype.toString.call(drink[prop]) === '[object Object]') {
    //     for (const key in drink[prop]) {
    //         console.log(key); // sale full
    //     }
    // }
    // breaking into a function variable, to reference to only one property instead of looking at the object every single time
    // const value = drink[prop];
    // if(Object.prototype.toString.call(value) === '[object Object]') {
    //     for (const key in value) {
    //         console.log(key); // sale full
    //     }
    // }
// }

const drink2 = {
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// iterating through only properties that we want
// Object.create(object) -> what happens here is: we are creating a new object from the prototype of existing object. drinkWithId inherited all drink properties.
const drinkWithId = Object.create(drink2);
// adding dynamically, id property to an inherited object.
drinkWithId.id = 'qwe123';
// console.log(drinkWithId); // {id: 'qwe123'} > [[Prototype]]: Object > name: "Lemonade" price {sale: 99, full: 129} -> here we can see inherited prototype.
// checking for name in prototype
// console.log('name' in drinkWithId); // true -> it does exist in drinkWithId prototype
// IN operator - it looks up into prototype, it checks whether we have something on the prototype chain, so it will look up into [[Prototype]].
for (const prop in drinkWithId ) {
    // console.log(prop); // id name price -> so here we can see that, drinkWithId inherited properties from the drink2 object like name nad price. This is all because of IN operator.
    // object.hasOwnProperty() -> it will iterate only through properties that exist on the drinkWithId object and won't iterate through [[Prototype]].
    if(drinkWithId.hasOwnProperty(prop)) {
        console.log(prop); // id -> it has only id, because we iterate properties directly on the object, and we are ignoring properties exists in the prototype.
        console.log(drinkWithId[prop]); // qwe123
    }
}