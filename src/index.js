import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Functions and Callbacks

// Passing a function as a function argument. We're passing through a whole function through another function. And internally invoke that function and pass some further info down to it.
// When we pass a function through as an argument, this is called CALLBACK FUNCTION.
function carParID(name, fn) {
    const theID = `CAR_PART_123qwe`;
    // Returning some kind of info, so we can give the person using our function, the ability to pass a function in. First, we need to set up our function.
    fn(`${theID}_${name}`); // now we can call it here after setting up carPart. We pass theID through to our callback function. This function will be called only when we call carParID.
    console.log(fn(`${theID}_${name}`)); // Car Part ID: CAR_PART_123qwe_Left Door
    return fn(`${theID}_${name}`); // now when we return
}

// setting up our function.
// function () {} anonymous function, because it doesn't have a name.
// carParID('Left Door', function (id) {
//     console.log(`Car Part ID: ${id}`); // Car Part ID: CAR_PART_123qwe_Left Door
// });
// const carPart = carParID('Left Door', function (id) {
//     console.log(`Car Part ID: ${id}`); // Car Part ID: CAR_PART_123qwe_Left Door
// });
// console.log(carPart); // undefined

const carPart = carParID('Left Door', function (id) {
    return `Car Part ID: ${id}`; // we can't return this value, it will be undefined. Because we are having our function definition, function getting called, but we ar not returning anything from carParID.
});
console.log(carPart); // undefined
// after adding return in carParID
console.log(carPart); // Car Part ID: CAR_PART_123qwe_Left Door