import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Finding Array Elements

const drinks = ['Lemonade', 'Lime', 'Peach'];

// indexOf(): number -> method returns the first index at which a given element can be found in the array, or -1 if it is not present. It Is case-sensitive. It is mainly for sor of primitives, such as strings and arrays. It won't help to deal with more complex data structures.
const index = drinks.indexOf('Peach');
console.log(index); // 2
if(index !== -1) {
    console.log(drinks[index]) // Peach
}

// includes(): boolean -> method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It Is case-sensitive.
const included = drinks.includes('Peach');
console.log(included); // true

//  for more complicated data structure
// 1. findIndex(): number -> method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. Essentially, it gives the same behavior as the indexOf(). It Is case-sensitive.
const drinksWithId = [
    {id: 1, name: 'Lemonade'},
    {id: 2, name: 'Lime'},
    {id: 3, name: 'Peach'},
];
const idIndex = drinksWithId.findIndex(value => value.name === 'Peach');
console.log(idIndex); // 2
console.log(drinksWithId[idIndex]); // {id: 3, name: 'Peach'}

// 2. find(): {} | undefined -> method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. Simpler way to find index.
const foundItem = drinksWithId.find(value => value.name === 'Peach');
console.log(foundItem); // {id: 3, name: 'Peach'}

console.log(drinks);

