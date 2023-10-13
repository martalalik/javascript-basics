import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Shorthand Properties and Methods
// const  myID = 'qwe123';
// const myName = 'Lemonade';
// const myPrice = 99;
// Shorthand Syntax
const id = 'qwe123';
const name = 'Lemonade';
const price = 99;
// creating property name dynamically - value dictate what the object key is called
const someKey = 'name';
const drink = {
    // id: myID,
    // name: myName,
    // price: myPrice,
    // Shorthand Syntax - if the value and the key have the same name
    id, // passes in id, which creates property called id. And assigns it, whatever the value is.
    // name,
    price,
    // creating property name dynamically
    [someKey]: name,
    gotDrinkDetails() {
        return `Drink ${this.name} (${this.price})`
    }
};
console.log(drink);

