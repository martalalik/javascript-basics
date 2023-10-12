import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Objects In-Depth
// ----------------------------------------------------------------

// Properties, Methods and Values

// in object: functions are called METHODS & we have PROPERTIES
const drink = {
    id: '123qwe',
    name: 'Lemonade',
    price: 99,
    // we can use arrow function, but is not recommended where is a need to use 'this.'
    // getDrinkDetails: () => `Drink ${this.name} (${this.price})`
    // when use 'this'
    getDrinkDetails() {
        return `Drink ${this.name} (${this.price})`
    },
    // complex key par
    // using space, for example, when we want to use key form another API and we want to store it as an object key. It is enough to wrap it in a string
    'abs 123': 'Im a value!',
    100: 'Im a number!'
};
console.log(drink);
// console.log(drink.getDrinkDetails()); // error - using arrow function -> this.name is undefined, because it's not actually pointing to the object. 'this' keyword is driven from the item, which calls the function. drink.getDrinkDetails() is calling the function, therefore 'this' should point to the 'drink'. Also arrow function has no 'this' key word, it simply tries and essentially uses the one outside the scope.
console.log(drink.getDrinkDetails()); // Drink Lemonade (99) - using function literal
// accessing 'abs 123': 'Im a value!', we can use '.' notation, use [] instead
console.log(drink["abs 123"]) // Im a value!
console.log(drink[100]) // Im a number!
console.log(drink['100']) // Im a number! -> we can use a string to, because JS will change any actual number to a string.
// grabbing value from an object and accessing it from a variable
const myID = 'id';
console.log(drink[myID]); // 123qwe -> [] lookup is dynamical, if you want access string or number, [] is to go other wise we stick with '.' notation.
