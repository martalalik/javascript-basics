import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Property and Value Existence Checking

const drink = {
    id: 'qwe123',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
    // hasOwnProperty() {
    //     return false;
    // }
};

// checking if VALUE exists
// standard
if(drink.id) {
    // console.log(drink.id); // qwe123
}

// checking by looping
// here, we're iterating all of the object values.
for (const prop in drink) {
    // console.log(prop); // id, name, price
    // console.log(drink[prop]); // qwe123 Lemonade {sale: 99, full: 129} -> use [] to check values dynamically
    if(drink[prop] === 'Lemonade') {
        // console.log(drink[prop]); // Lemonade
    }
}

// new syntax Object.values() -> will gives an array of all the values on drink object, this is a DECLARATIVE METHOD -> declaring, telling the computer that we want to do something.
// Object.values() -> give me all the object values
// console.log(Object.values(drink)); // 0:"qwe123" 1:"Lemonade" 2:{sale: 99, full: 129}
// include(pass object)
// good way to detect if a value exists
// const hasLemonade = Object.values(drink).includes('Lemonade');
// console.log(hasLemonade); // true

// checking if a PROPERTY exists -> hasOwnProperty()
// JS objects has method - a function on the object built into them, which will tell us whether or not it has a particular property.
// hasOwnProperty(pass property name) -> but there is one flaw with this approach
// console.log(drink.hasOwnProperty('name')); // true
// console.log(drink.hasOwnProperty('name')); // false -> when  hasOwnProperty() {return false} exists on the object

// checking if a PROPERTY exists -> Object.prototype.hasOwnProperty.call() -> safest way to go
// drink object inherits from the object prototype, it gets hasOwnProperty() method. Even though we can overwrite hasOwnProperty() in drink object, it isn't actually overwriting it on the Object.prototype, which means that we can access hasOwnProperty() directly.
console.log(Object.prototype.hasOwnProperty.call(drink, 'name')); // true -> even when on a drink object is added hasOwnProperty().

// checking if a PROPERTY exists -> (Object.keys(object).includes('property') -> also safe to go, but when an object is large it will be overkilled to iterate through the object with the keys(). It is good when you want to convert an object into an array and just get those keys.
console.log(Object.keys(drink)); // ['id', 'name', 'price']
console.log(Object.keys(drink).includes('name')); // true -> even when on a drink object is added hasOwnProperty().