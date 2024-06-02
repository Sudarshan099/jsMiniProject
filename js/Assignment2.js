/*
1) Password Strength Checker: Write code using if/else statements to check the
strength of a password based on its length. Print messages like &quot;Strong password,&quot;
&quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
&gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).
*/

let password = "Sudarshannnn";

if (password.length >= 12){
    console.log("Strong password");
}
else if (password.length >= 8 && password.length < 12){
    console.log("Medium password");
}
else if (password.length < 8){
    console.log("Weak password");
}
else{
    console.log("Invalid")
}

/* 2) Vowel or Consonant: Write a program using if/else to determine if a character entered
by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
letters.
*/

let char = 'G';
char = char.toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


/*
3) Number Guessing Game: Create a simple guessing game using if/else statements.
Generate a random number between 1 and 10 and allow the user to guess it. Print
messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.
*/



/*
4) Calculate Price with Tax: Write code using if/else to calculate the final price of a
product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
inputs and print the final price with tax.
*/

let Price = 999;
let taxRate = 9;

const taxAmount = Price * (taxRate / 100);
const finalPrice = Price + taxAmount;
console.log("Final price with", taxRate, "% tax:", finalPrice);

/* 5) Simple Calculator: Develop a basic calculator using if/else statements. Allow the user
to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
calculation and print the result.
*/

let num1 = 999;
let num2 = 3;
let operator = '*';
let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    console.log("Invalid operator");
}

console.log( result);


/* 6. Movie Rating Recommendation: Write code using switch/case to recommend a
movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).
*/

let age = 20;

switch (true){
    case age <=12:
        console.log("Animation");
        break;
    case age >=12 && age < 18:
        console.log("Action");
        break;
    case  age >= 18  :
        console.log("Adventure");
        break;
    default:
        console.log("Others")
}

/*
7) Weekend or Weekday Checker: Create a program using if/else to determine if a
given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).
*/

let date = '2003-08-22';
date = new Date(date);

const weekday = date.getDay();

if (weekday === 0) {
    console.log(date, " lies on Sunday");
} 
else if (weekday === 6) {
    console.log(date, " lies on Saturday");
} 
else {
    console.log("Normal day");
}

/* 8) Positive, Zero, or Negative: Write code using if/else statements to check if a number
is positive, zero, or negative. Print the corresponding message.
*/

let number = 0;

if (number > 0) {
    console.log(number, " is positive number.");
} 
else if (number < 0) {
    console.log(number, " is negative number.");
} 
else if (number == 0) {
    console.log("Given number is zero.");
} 
else {
    console.log("Invalid");
}

/*
9) Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible
by 3, 5, or both. Print a message indicating divisibility or non-divisibility.
*/

let numm = 24;

if (numm % 3 === 0 && numm % 5 === 0) {
    console.log(numm + " is divisible by both 3 and 5");
}
else if (numm % 3) {
    console.log(numm + " is divisible by 3");
}
else if (numm % 5) {
    console.log(numm + " is divisible by 5");
}
else {
    console.log(numm + " is not divisible by 3 or 5");
}

/* 10) Even or Odd Sum: Write code using if/else to check if the sum of two user-entered
numbers is even or odd. Print the result.
*/

let num3 = 33;
let num4 = 66;
let sum = num3 + num4;

if (sum % 2 === 0) {
    console.log("The sum is even = "+ sum);
} else {
    console.log("The sum is odd = "+ sum);
}
