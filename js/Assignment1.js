// Create two variables, one for your name and another for your age. Print a sentence
// combining those variables.

// Define variables for name and age
let name = "Sudarshan";
let age = 21;

console.log("My name is " + name + " and I am " + age + " years old.");

// Assign the value 10 to a variable. Then multiply that variable by itself and store the
// result in another variable. Print the final value.

// Assign the value 10 to a variable
let num = 10;

// Multiply the variable by itself and store the result in another variable
let result = num * num;
console.log( result);


// Write code to check if the character stored in a variable is uppercase or lowercase.
// Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes)

// Define a variable to store a character
let letter = 'G';

if (letter >= 'A' && letter <= 'Z') {
    console.log("UPPERCASE");
} else if (letter >= 'a' && letter <= 'z') {
    console.log("lowercase");
} else {
    console.log("Invalid");
}


// Declare two variables with numeric values. Add them together and print the sum. Then,
// subtract the smaller number from the larger number and store the difference in a new
// variable. Print the difference.

// Declare two variables with numeric values
let num1 = 35;
let num2 = 34;

let sum = num1 + num2;
console.log("The sum : " + sum);

let difference =  num1>num2 ? num1 - num2 : num2 - num1; 
console.log("The difference : " + difference);


// Imagine you have a variable storing a product price. Write code to apply a 10%
// discount and print the discounted price.

let Price = 500;
let discount = 10; 

let discount_amount  = (Price * discount)/100;
let d_Price = Price - discount_amount;
console.log("The discounted price with", discount, "% off is:", d_Price);

