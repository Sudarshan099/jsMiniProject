// const arr = [5,7,5,40,9];
// const first = arr[0];
// const rest = arr.slice(3);

// console.log(first);
// console.log(rest);

const arr = [1,2,3,4,5,7,5,40,9];
const [a,...rest]=arr;
console.log(a);
console.log(rest);

//Operators:
// Spread Operator: expand elements of an array of an object. distributed into a new array. modyfying array

// Usage of Spread Operators with Arrays:
    //Concatenating arrays
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const combinedArray = [...array1,...array2];
    console.log(combinedArray);

    //COpying arrays
    const orgArray = [1,2,3];
    const copyArray = [...orgArray];
    console.log(copyArray);

    // Rest Operator: (...) syntax. contracts the remaning elements of an array. 

// using slice function example
// const arr = [1,2,3,4,5];
// const first = arr[0];
// const rest = arr.slice(1);
// console.log(First Element: ${first});
// console.log(Remaining element: ${rest})

function sub(... number){
    return number.reduce((minus, num) => minus - num, 0);
}
console.log(sub(8,5,1));