import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Reversing and Sorting Arrays

const drinks = [
    {name: 'Lemonade', price: 79},
    {name: 'Lime', price: 89},
    {name: 'Peach', price: 99}
];

// REVERSE
// reverse() -> method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// To reverse the elements in an array without mutating the original array, use toReversed().
console.log(drinks.reverse()); // 0:{name:Peach, ...} 1:{name:Lime, ...} 2:{name:Lemonade, ...}

// SORT
// sort() ->method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// To sort the elements in an array without mutating the original array, use toSorted().
console.log(drinks.sort(function (a, b){
    return a.price - b.price;
})); // 0:{..., price:79} 1:{..., price:89} 2:{..., price:99}
// in a for of arrow function, always good to use for call-backs.
console.log(drinks.sort((a, b) => b.price - a.price)); // 0:{..., price:99} 1:{..., price:89} 2:{..., price:79}