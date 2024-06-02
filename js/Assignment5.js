//1. Write a JavaScript function add that takes two numbers as arguments and returns their
//sum. Provide an example of calling this function with two numbers.
function add(a,b){
    return a+b;
}
const num =add(34,35);
console.log(num);

// 2. Write a JavaScript function getFirstElement that takes an array as an argument and
// returns the first element of the array. Provide an example with an array of your choice.
function getFirstElement(arr){
    return arr[0];
}
const arrays=[101,202,404,707,808,909];
const firstElement = getFirstElement(arrays);
console.log(firstElement);

// 3. Define a JavaScript object person with properties name, age, and city. Write a function
// getPersonInfo that takes this object and returns a string with the person&#39;s details in the
// format &quot;Name: [name], Age: [age], City: [city]&quot;.
const person ={
    Name:"Griffin",
    Age:21,
    City:"kathmandu"
}
function getPersonInfo(person){
    return (`Name:${person.Name}, Age: ${person.Age}, City:${person.City} `);

}
const detail = getPersonInfo(person);
console.log(detail);

// 4. Write a JavaScript function toUpperCase that takes a string as an argument and
// returns the string in all uppercase letters. Provide an example with a sample string.
function toUpperCase(str){
    return str.toUpperCase();
}
const string="kusum";
const uppercase = toUpperCase(string);
console.log(uppercase);

// 5. Write a JavaScript function multiply that takes two numbers as arguments and returns
// their product. Provide an example of calling this function with two numbers.
function multiply(a,b){
    return a*b;
}
const product = multiply(10,11);
console.log(product);

// 6. Write a JavaScript function getLastElement that takes an array as an argument and
// returns the last element of the array. Provide an example with an array of your choice.
function getLastElement(arr){
    return arr[arr.length-1];

}
const numbers =[0,8,5,6,1,7,3,9,4];
const lastElement = getLastElement(numbers);
console.log(lastElement);

// 7. Define a JavaScript object book with properties title, author, and year. Write a function
// getBookTitle that takes this object and returns the title of the book.
const book ={
    title:"E = MC2",
    author:"Einstein",
    year: 2024
}
function getBookTitle(book){
    return book.title;
}
console.log(getBookTitle(book));


// 8. Write a JavaScript function reverseString that takes a string as an argument and
// returns the string reversed. Provide an example with a sample string.

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("brook"));


// 9. Write a JavaScript function isEven that takes a number as an argument and returns
// true if the number is even and false if it is odd. Provide an example with a sample
// number.
function isEven(num){
    return num % 2 === 0;
}
const n = 99;
const evenNum = isEven(n);
console.log(evenNum);
console.log(isEven(50));


// 10. Write a JavaScript function sumArray that takes an array of numbers as an argument
// and returns the sum of all the numbers in the array. Provide an example with an array
// of numbers.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));


// 11. Define a JavaScript object car with properties make, model, and year. Write a function
// getCarModel that takes this object and returns the model of the car.
const car ={
    make:"Buggati",
    model:"Veryon",
    year:2024
}
function getCarModel(car){
    return car.model;
}
console.log(getCarModel(car));
// 12. Write a JavaScript function concatenateStrings that takes two strings as arguments
// and returns a new string that is the concatenation of the two input strings. Provide an
// example with two sample strings.
function concatenateStrings(str1,str2){
    return str1+str2;
}
const cocate = concatenateStrings("Sudarshan ","Bam");
console.log(cocate);
// 13. Write a JavaScript function square that takes a number as an argument and returns its
// square. Provide an example of calling this function with a sample number.
function square(num){
    return num *num;
}
console.log(square(12));
// 14. Write a JavaScript function findMax that takes an array of numbers as an argument
// and returns the largest number in the array. Provide an example with an array of
// numbers.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 3, 7, 2, 5])); 

// 15. Define a JavaScript object student with properties firstName, lastName, and grade.
// Write a function getFullName that takes this object and returns the full name of the
// student in the format &quot;firstName lastName&quot;.
const student = {
    firstName: "Kusum",
    lastName: "Bam",
    grade: "A+"
};

function getFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}
console.log(getFullName(student)); 

// 16. Write a JavaScript function greet that takes a name as an argument and returns a
// greeting string in the format &quot;Hello, [name]!&quot;. Provide an example of calling this
// function with a sample name.
function greet(str){
    return (`Hello, ${str}!`)
}
console.log(greet("Griffin"));

// 17. Write a JavaScript function doubleArray that takes an array of numbers as an
// argument and returns a new array with each number doubled. Provide an example with
// an array of numbers.
function doubleArray(arr) {
    let doubled = [];
    for (let i = 0; i < arr.length; i++) {
        doubled.push(arr[i] * 2);
    }
    return doubled;
}
console.log(doubleArray([2, 3, 5])); 

// 18. Define a JavaScript object movie with properties title, director, and releaseYear. Write a
// function getMovieTitle that takes this object and returns the title of the movie.
const movie={
    title:"Leo'll Rule",
    director:"Sudarshan Bam",
    releaseYear:2003
}
function getMovieTitle(movie){
    return movie.title;
}
console.log(getMovieTitle(movie));
// 19. Write a JavaScript function getLength that takes a string as an argument and returns
// the length of the string. Provide an example with a sample string.
function getLength(string){
    return string.length;
}
console.log(getLength("Sinagami"));
// 20. Write a JavaScript function subtract that takes two numbers as arguments and returns
// their difference. Provide an example of calling this function with two numbers.
function subtract(a,b){
    return a-b;
}
const num1 =subtract(71,39);
console.log(num1);
// 21. Write a JavaScript function mergeArrays that takes two arrays as arguments and
// returns a new array containing all elements from both arrays. Provide an example with
// two arrays.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([3, 9], [6, 7])); 

// 22. Define a JavaScript object recipe with properties name, ingredients (an array), and
// servings. Write a function getIngredientList that takes this object and returns the
// ingredients array.
const recipe = {
    name: "Ramen",
    ingredients: ["flour", "pork", "eggs"],
    servings: 5
};

function getIngredientList(recipe) {
    return recipe.ingredients;
}
console.log(getIngredientList(recipe));

// 23. Write a JavaScript function endsWith that takes a string and a character as arguments
// and returns true if the string ends with the given character, otherwise false. Provide an
// example with a sample string and character.
function endsWith(str, char){
    return str[str.length - 1] === char;
}
console.log(endsWith("Sudarshan", "n")); 
console.log(endsWith("Bam", "s")); 
// 24. Write a JavaScript function divide that takes two numbers as arguments and returns
// their quotient. Provide an example of calling this function with two numbers.
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(33, 3)); 

// 25. Write a JavaScript function removeFirstElement that takes an array as an argument
// and returns a new array with the first element removed. Provide an example with an
// array.
function removeFirstElement(arr){
    return arr.slice(1);
}
console.log(removeFirstElement([1,2,3,4]));
// 26. Define a JavaScript object album with properties title, artist, and tracks (an array of
// track names). Write a function getTrackCount that takes this object and returns the
// number of tracks.
const album = {
    title: "Thriller",
    artist: "Michael Jackson",
    tracks: ["Wanna Be Startin Somethin", "Thriller", "Beat It"]
};

function getTrackCount(album) {
    return album.tracks.length;
}
console.log(getTrackCount(album));

// 27. Write a JavaScript function startsWith that takes a string and a character as arguments
// and returns true if the string starts with the given character, otherwise false. Provide an
// example with a sample string and character.
function startsWith(str, char){
    return str[0] === char;
}
console.log(startsWith("Sudarshan", "S")); 
console.log(startsWith("Griffin", "b")); 
// 28. Write a JavaScript function isPositive that takes a number as an argument and returns
// true if the number is positive and false if it is negative or zero. Provide an example with
// a sample number.
function isPositive(num) {
    return num > 0;
}
console.log(isPositive(1)); 
console.log(isPositive(-1)); 
console.log(isPositive(0)); 

// 29. Write a JavaScript function countElements that takes an array as an argument and
// returns the number of elements in the array. Provide an example with an array.
function countElements(arr) {
    return arr.length;
}
console.log(countElements([1, 2, 3, 4]));

// 30. Define a JavaScript object game with properties name, genre, and platforms (an array
// of strings). Write a function getPlatformList that takes this object and returns the
// platforms array.
const game = {
    name: "PUBG",
    genre: "Battleground ",
    platforms: ["PC", "Mac", "Linux"]
};
function getPlatformList(game){
    return game.platforms;
}
console.log(getPlatformList(game))