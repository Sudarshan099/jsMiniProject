//1. Write a function that takes two parameters and returns their sum.
let sum = (a,b) =>{
    return a+b;
}
console.log(sum(10,30));

// 2. Create a function that calculates the average of an array of numbers.

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; 
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum); 
    const average = sum / numbers.length;
    
    return average;
}

let array = [2,6,8,9,3];
const average = calculateAverage(array);
console.log(average); 

// 3. Write a function that checks if a given number is even or odd.

function checkEvenOdd(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(9);

// 4. Create a function that reverses a string.

let revers="";
function reversestring(strings){
    for(let i=strings.length-1; i>=0; i--){
        revers +=strings[i];
    }
    return revers;
}
const str ="Griffin";
const reversestrings = reversestring(str);
console.log(reversestrings);

// 5. Write a function that finds the maximum value in an array of numbers.


let arrays = [19,34,3,39,333];
let maxValue = arrays[0];
function MaxValue(arrays) {
    for (let i = 1; i < arrays.length; i++) {
        if (arrays[i] > maxValue) {
            maxValue = arrays[i];
        }
    }
    return maxValue;
}
const maxNumber = MaxValue(arrays);
console.log(maxNumber);


// 6. Create a function that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsiusTemperature = 37;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F"); 


// 7. Write a function that generates a random number between a given minimum and maximum.

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 9;
const maxxNumber = 999;
const randomNumber = generateRandomNumber(minNumber, maxxNumber);
console.log( randomNumber);


// 8. Create a function that checks if a string is a palindrome.

function Palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return  "It is not palindrome";
      }
    }
    return "It is palindrome";
  }
  const strings = 'sunil';
  const strings1="noon";
  const palindromes= Palindrome(strings);
  console.log(palindromes);
  const palindromes1= Palindrome(strings1);
  console.log(palindromes1);

// 9. Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetter(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}
const sentence = "the quick brown fox jumps over the lazy dog";
const capital = capitalizeFirstLetter(sentence);
console.log(capital); 


// 10. Create a function that returns the factorial of a given number.

function factorial(n) {

    let fact = 1;

    for (let f = 1; f <= n; f++) {
    fact *= f;
    }
    return fact;
}
const number = 5;
console.log(factorial(number)); 


// 11. Write a function that counts the number of occurrences of a specific element in an array.

let count = 0;
function countOccurrences(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
const numbers = [1, 2, 3, 4, 2, 2, 5];
const elementToCount = 2;
console.log(elementToCount + " occured " + countOccurrences(numbers, elementToCount) + " times.");


// 12. Create a function that checks if a given year is a leap year.

function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year = 2024;
const ly = LeapYear(year);
console.log(ly);

// 13. Write a function that merges two arrays and returns the sorted result.

function mergeAndSortArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

const array1 = [3, 0, 0];
const array2 = [3, 1, 5];
console.log(mergeAndSortArrays(array1, array2));

// 14. Create a function that converts a number to its Roman numeral representation.

let romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];
let result = '';
function intToRoman(num) {
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

const toConvert = 2081;
console.log(intToRoman(toConvert));


// 15. Write a function that finds the second smallest element in an array of numbers.

function secondSmallest(arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray[1];
}
const numbersArray = [3, 0, 4, 10, 5, 9, 2, 6];
console.log(secondSmallest(numbersArray)); 

// 16. Create a function that calculates the area of a circle given its radius.

let r=7;
function areaOfCircle(r){
    return( Math.PI*r**2);
}
const calulatearea=areaOfCircle(r);
console.log(calulatearea);

// 17. Write a function that truncates a string if it exceeds a specified length and appends &quot;...&quot; to the end.

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } else {
        return str;
    }
}
const stringToTruncate = "The quick brown fox jumps over the lazy dog.";
let maxLength=22;
const truncateStrings=truncateString(stringToTruncate,maxLength)
console.log(truncateStrings); 

// 18. Create a function that checks if a given string contains only digits.

function containsOnlyDigits(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}
const str2="54312"
const str3="143a6"
const OnlyDigits = containsOnlyDigits(str2);
console.log(OnlyDigits); 
console.log(containsOnlyDigits(str3));

// 19. Write a function that removes all falsy values (false, null, 0, &quot;&quot;, undefined, and NaN) from
// an array.
// 20. Create a function that generates a new array with unique values from a given array.

function uniqueValues(arr) {
    return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqvalue =uniqueValues(arrayWithDuplicates);
console.log(uniqvalue);   