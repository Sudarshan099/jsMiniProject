let n1 = 35;
let n2 = 34;
sum = n1 + n2;
console.log(sum);

const name = "Moron";
const leo = "Idiot";
const concat = name + leo;
console.log(concat);

const sub = n1 -n2 ;
const sub1 = leo - name;
console.log(sub);
console.log(sub1);

const mul = n1 ** 3;
console.log(mul);

const div = n1 / n2;
console.log(div);

const mod = n2%n1;
console.log(mod);

let z=5;
z++; // increament by 1
console.log(z);

let j=5;
j+=2; // increament by 2
console.log(j);


const x=33;
const y=99;
console.log(x==y); //check value. true even if string "99"
console.log(x != y);
console.log(x===y);
console.log(x!==y);

const p=true;
const q=false;
console.log(p && q);

console.log('10' + '10');
console.log('10' - '10');
console.log('10' + + 10);
console.log(10 + + '10');

//conditional statements

// let height = 1.67;
// let weight = 53;

// let bmi = weight / (height*height);
// console.log(bmi);

// if (bmi < 18.5) {
//     console.log("UNDERWIGHT");
// }
// else if (bmi >= 18.5 && bmi <=24.9) {
//     console.log("normal");
// }
// else if (bmi >= 25 && bmi <=29.9) {
//     console.log("overwight");
// }
// else {
//     console.log("obesity");
// }

// switch case

let day = 9;
switch(day) {
    case 1:
    console.log("sunday");
    break;
    case 2:
    console.log("monday");
    break;
    case 3:
    console.log("tuesday");
    break;
    case 4:
    console.log("wednesday");
    break;
    case 5:
    console.log("thrusday");
    break;
    case 6:
    console.log("friday");
    break;
    case 7:
    console.log("saturday");
    break;
    default:
    console.log("invalid")
}

let height = 1.67;
let weight = 53;

let bmi = weight / (height*height);

switch(true) {
    case bmi < 18.5:
    console.log("UNDERWIGHT");
    break;
    case bmi >= 18.5 && bmi <=24.9:
    console.log("normal");
    break;
    case bmi >= 25 && bmi <=29.9:
    console.log("overweight");
    default:
    console.log("obesity")
}

// for loop


