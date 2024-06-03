/// ### simple synatx for functions ///
// function functionName(parameters) {
//     //FUnction body(code to be executed)
//     //..
//     return Result; //Optional return statement
// }

// function Invocation(calling)
// functionName(arguments);

//return ## program execute garne kaam, optional: value return garne

// function greet(name) {
//     // console.log(`My name is ${name}`);
//     return(`My name is ${name}`)
// }

// // greet("Alice"); 
// const result = greet('John');
// console.log(result);

// function sum(a, b) {
//     return a + b;
// }
// const sumResult = sum(2, 3);
// console.log(sumResult);

// function subtract(a,b) {
//     return a - b;
// };
// const subResult = subtract(5, 4);
// console.log(subResult);

/// #################################
/// ########### SCOPE ###############
/// #################################

// GLobal Scope and Local Scope

// #######################################################
// #########################
// ## Constructor Function - object initialization - invoked using the new keyword
//beglai euta function banauna milne
// #########################

function Person(name, age){ //constructor initialization
    this.name = name;
    this.age = age;
}
let john = new Person("John", 25); // instance object intialization
console.log(john)
// console.log(john.name)

// Variable lai access garne nai Scope anxbham
// Global Scope - 
// Local Scope - 
let globalVar = "I am global";

function localscope(){
    let localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
}
localscope();
console.log(localscope);

///////////////////////////////////////////
// CLOSURES FUNCTIONS- inner function has access to the inner functions variables as well
///////////////////

function outerFunction() {
    let outerVar = " I am Outside!";

    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}
const myClosure = outerFunction();
myClosure();

/////////////////////////////
// CALLBACK FUNCTIONS - function that is passed onto another function as an arguments. It is used to change asynchronous code into synchronous and vice-versa
// synchronous - sequential order ma code execute hunxa. Each operation le previous code lai process huna wait garxa ani tespaxi matra arko operation tira lagxa
// asynchronous - yesma chai euta operation process bhairkhda pani aru tasks haru background ma run huna dinxa
//////////////////////////

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
    // callback(name);
}

function sayGoodbye() {
    console.log("Goodbye");
}

greet("alice", sayGoodbye);
//

function greet(name, callback) {
    return callback(name);
}

greet("John", sayName);

function sayName(name) {
    console.log("Hello, " + name);
}

//
function addition(a, b, callback) {
    const addResult = a + b;
    console.log(addResult);
    callback(a,b);
}

function subtraction(a, b) {
    const subResult =  a - b;
    console.log(subResult);
}

a = 5;
b = 6;
addition(a,b, subtraction);

//////////////////////////////////
// PROMISES - object that handles asynchronouse operations
/////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//     const sum = 10;
//     if (sum == 10) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// // .then = resolve bhako varibale store garxa true xa bhane value return gardinxa
// // .catch = reject bhako error catch garxa
// promise.then(
//     (message) =>{
// console.log(message);
//     }
// ).catch((err) => {
//     console.log(err);
// });


// promise if subtracted value is less than 5, resolve print and if more than 5 reject and print.



const operation = new Promise((resolve, reject) => {
    const a = 10;
    const b = 15;
    const subResult = b - a;
    if (subResult < 5) {
        resolve("success");
    } else {
        reject("Reject");
    }
    console.log(`The subtracted value is: ${subResult}`);
});


operation.then((message) =>{
    console.log(message);
}
).catch((err) => {
    console.log(err)
});


//async/ await

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function getData(){
    const data = await fetchData();
    console.log(data);
}
getData();


/////////////////////find - find 1st element

const numbers = [10,20,30,40,50];

const foundNumber = numbers.find((num) =>{
return num > 30;
});
console.log(foundNumber);


const filterNumbers = numbers.filter(num => num>30);
console.log(filterNumbers);

const squareNumbers = numbers.map(num => num-2);
console.log(squareNumbers);






