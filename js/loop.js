// for (let i=1; i<=10; i++){
//     if (i == 5 || i == 6 || i == 7 ){
//         continue;
//     }
//     console.log(i);
// }

/*
let i = 1;
while(i <= 10) {
    if ( i == 5 ) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
 */

// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 10);

// question even number 2 to 10

// let i = 1;
// while(i <= 10) {
//     if ( i % 2== 0 ) {
//         console.log(i);
//     }
//     i++;
// }

// sum of number from 1 to 10
// let sum = 0;
// for (let i=1; i<=10; i++){
//     sum += i;
// }
// console.log(sum);

//  factorial of 5

// let num = 5;
// let factorial = 1;
// let i = num;

// while(i > 1) {
    
//     factorial *= i;
//     i--;
   
// }
// console.log(factorial);

// // square
// for (let i=1; i<=5; i++){
//     sq = i**2;
//     console.log(sq);
// }

// // cube
// let n = 1;
// while ( n <=5 ){
//     j = n**3;
//     console.log(j);
//     n++;
// }

// // array

// let array = ['1','2','Griffin','4','5'];

// for (let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

// // sum of element in array

// let array2 = [1, 2, 3, 4, 5];
// sum = 0;
// n = 0;
// while( n < array2.length){
//     sum = sum + array2[n];
//     n++;
// }
// console.log(sum);

// // reverse order for array

// let array3 = ['1', '3', '5', '6', '7'];

// for (i = array3.length-1; i >= 0; i--){
//     console.log(array3[i]);
// }

// Question 10:
// **Q: Using a while loop, find the largest number in an array of numbers.**

const numbers = [6, 9, 3, 12, 24]; 
let largest = numbers[0]; 

let m = 1;
while (m < numbers.length) {
  if (numbers[m] > largest) {
    largest = numbers[m];
  }
  m++;
}

console.log("Largest number:", largest);

// Question 11:
// **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**

let summ = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        summ += i;
    }
}

console.log( summ);

// Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**

let product = 1;
let p = 1;

while (p <= 15) {
    if (p % 2 !== 0) {
        product *= p;
    }
    p++;
}

console.log( product);

// Question 14:
// **Q: Using a while loop, print the numbers from 10 to 1 in descending order.**

let d = 10;
while (d >= 1) {
  console.log(d);
  d--;
}

// Question 15:
// **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**

const num = 6; 

let factorial = 1;
for (let f = 1; f <= num; f++) {
  factorial *= f;
}

console.log( factorial);

// Question 16:
// **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**

let number = 123 
let sumOfDigits = 0;

while (number > 0) {
    let digit = number % 10; // Get the last digit
    sumOfDigits += digit;    // Add the digit to the sum
    number = Math.floor(number / 10); // Remove the last digit
}

console.log("The sum of the digits is: " + sumOfDigits);

// Question 18:
// **Q: Using a while loop, print the first 10 Fibonacci numbers.**

let a = 0;
let b = 1;
let fi = 1;

while (fi <= 10) {
  console.log(a);
  const next = a + b;
  a = b;
  b = next;
  fi++;
}

// Question 19:
// **Q: Write a for loop to find and print the prime numbers between 1 and 20.**

for (let p = 2; p <= 20; p++) {
    let isPrime = true;
    for (let r = 2; r < p; r++) {
      if (p % r === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(p);
    }
  }

// Question 20:
// **Q: Using a while loop, reverse a given number (e.g., 12345).**

let number2 = 12345;
let reversedNumber = 0;

while (number2 > 0) {
    let digit2 = number2 % 10; // Get the last digit
    reversedNumber = (reversedNumber * 10) + digit2; // Append the digit to the reversed number
    number2 = Math.floor(number2 / 10); // Remove the last digit
}

console.log("The reversed number is: " + reversedNumber);