import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Function Closures and Scope

// SCOPE
// scope 1
// const anotherID = '1321jhsd';
// const someID = 99;
// function makeCarPartID(id) {
//     // scope 2 - nested scope
//     console.log(id); // here we can access id
//     console.log(anotherID); // get access
//     const someID = 99;
//     function anotherFunction() {
//         // scope 3
//         const someID = 99;
//         console.log(someID); // get access - this will look into the current scope first, so it won't access const someID = 99 from upper scope;
//                             // when const someID = 99; from scope 3 would be taken away it would access const someID = 99; from scope 2 and so on.
//         console.log(id); // here we can access id
//         console.log(anotherID); // get access
//     }
// }
// console.log(id); // here we can't access id, the program will not compile. This is not possible because function creates brand-new scope.
// console.log(anotherID); // get access
// makeCarPartID('zkh865G');

// CLOSURE
// function makeCarPartID(id) {
//     const theID = `CAR_PART_${id}`;
//     return theID;
// }
// const carPartID = makeCarPartID('zkh865G');
// console.log(carPartID);

// This is a good example of how we create and essentially freeze in time, after we have called the function once the variables in that particular closure.
// And then when we call the function again, it saves that variable in a particular scope. In this case makeCarPartID, it has its own child scope with a local variable.
// The function can access variables above in the scope, we have full access to theID.
// So everytime we call return function, we can then go ahead and prefix it.
function makeCarPartID(id) {
    const theID = `CAR_PART_${id}`;
    console.log(`Created: ${theID}`); // Created: CAR_PART_zkh865G -> it is created
    // but when we want to add more car parts and do not want repeat yourself, we can return another function instead variable.
    // the idea of the scope chain and the idea of the closure is that the function essentially closes over the upper variables.
    // Even though makeCarPartID function is called, the return function is still waiting to be called, but it has access to theID variable.
    // return function (name) {
    //     // console.log(theID); // CAR_PART_zkh865G
    //     // to fix undefined from console.log(carPartID()); -> so we a return and create a new string
    //     return `${theID}_${name.toUpperCase()}`;
    // }
    // converting to arrow function
    return name => `${theID}_${name.toUpperCase()}`;
}
// here we created unique car id
// makeCarPartID function it is called once, because is invoked once
const carPartID = makeCarPartID('zkh865G'); // calling function here. Return function is returned to this variable, so this variable contains return function, which has access to theID.
// because we return carPartID function here, we in fact, want to go ahead and called it again.
// console.log(carPartID); // return function structure
// calling function, which is returned from makeCarPartID function
// console.log(carPartID()); // undefined (before adding return inside return function) -> because we are not returning anything to this function yet.; calling function here
console.log(carPartID('Left Door')); // CAR_PART_zkh865G_LEFT DOOR -> after adding return inside return function
console.log(carPartID('Right Door')); // CAR_PART_zkh865G_RIGHT DOOR
// now it is possible to create more cars
const anotherCarPartID = makeCarPartID('123qwe');
console.log(anotherCarPartID('Left Door')); // CAR_PART_123qwe_LEFT DOOR
console.log(anotherCarPartID('Right Door')); // CAR_PART_123qwe_RIGHT DOOR
