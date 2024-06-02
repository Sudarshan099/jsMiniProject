function greet(name) {
    return("hello, "+ name);
}
const result = greet('Griffin');
console.log(result);

function sum(a, b){
    return a +b;
}
const sumResult = sum(2,4);
console.log(sumResult);

// function sub(a, b){
//     return a - b;
// }
// const subResult = sub(2,4);
// console.log(subResult);

// function expression

const sub = function(a,b){
return a-b;
}
const subResult = sub(2,4);
console.log(subResult);

// arrow function
const mul=(a,b) =>{
    return a*b;
}
const mulresult = mul(3,3);
console.log(mulresult);

const me=(fname, age) =>{
    return (`My name is ${fname} and age is ${age}`)
}
const myself = me("Griffin" , 21);
console.log(myself);

//constructor function
const person = {
    lname: "Bam",
    agee: 21,
    hobbies: ["gaming","playing","travelling"],
}
console.log(person.lname, person.agee, person.hobbies);

const numbers = [7,2,4,8,5]
numbers.push(6);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

//objects

const rectangle = {
    width: 10,
    height: 5,
    getArea: function(){
        return this.width * this.height;
    }
};
console.log(rectangle.getArea());