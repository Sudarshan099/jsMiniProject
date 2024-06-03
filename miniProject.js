// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should
// return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// should represent a user with properties id, name, and age.

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: 'Sudarshan', age: 21 },
          { id: 2, name: 'Griffin', age: 3000 },
          { id: 3, name: 'Maili', age: 19 }
        ];
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData().then((stu) => {
    console.log(stu);
  });
  

//   2. Closures
//   Create a function createCounter that returns an object with two methods: increment and
//   getCount. The increment method should increase the internal count by 1, and the getCount
//   method should return the current count. Use a closure to maintain the internal count variable.

function createCounter() {
    // Internal count variable maintained by the closure
    let count = 0;
  
    // Return an object with two methods: increment and getCount
    return {
      increment: function() {
        count += 1;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  
  counter.increment();
  console.log(counter.getCount()); 
  
  counter.increment();
  console.log(counter.getCount()); 
  
  counter.increment();
  console.log(counter.getCount()); 

//   3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The
// function should process each number in the array using the callback function and return a
// new array of processed numbers.

function processData(numbers, callback) {
    // Create a new array to store processed numbers
    const processedNumbers = [];
  
    // Loop through each number in the input array
    for (let i = 0; i < numbers.length; i++) {
      // Apply the callback function to the current number and store the result
      processedNumbers.push(callback(numbers[i]));
    }
  
    // Return the new array of processed numbers
    return processedNumbers;
  }
  
  // Define a callback function that doubles a number
  function double(num) {
    return num * 2;
  }
  
  // Define a callback function that squares a number
  function square(num) {
    return num * num;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const doubledNumbers = processData(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  
  const squaredNumbers = processData(numbers, square);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  

//   4. Async/Await
//   Rewrite the fetchData function from Question 1 using async and await.

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
            { id: 1, name: 'Sudarshan', age: 21 },
            { id: 2, name: 'Griffin', age: 3000 },
            { id: 3, name: 'Maili', age: 19 }
        ];
        resolve(data);
      }, 2000);
    });
  }
  
  async function getData() {
    const data = await fetchData();
    console.log(data);
  }
  
  // Call the getData function
  getData();

//   5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
  
  function doubleNumbers(number) {
    // Use the map method to create a new array with each number doubled
    return number.map(num => num * 2);
  }
  
  const originalNumber = [1, 2, 3, 4, 5, 6];
  const doubledNumber = doubleNumbers(originalNumber);
  
  console.log(doubledNumber); 
  
//   6. Array Manipulation: Filter
// Given an array of numbers, create a function that filters out numbers less than 10 using filter.

function filterNumbersLessThanTen(numbers) {
    // Use the filter method to create a new array with numbers >= 10
    return numbers.filter(num => num >= 10);
  }
  
  const ogNumbers = [5, 12, 8, 21, 3, 10, 7, 14];
  const filteredNumbers = filterNumbersLessThanTen(ogNumbers);
  
  console.log(filteredNumbers); 

//   7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using
// find.

function findNumbersMoreThanTen(numbers1) {
    // Use the filter method to create a new array with numbers >= 10
    return numbers1.find(num => num >= 10);
  }
  
  const ogsNumbers = [5, 12, 8, 21, 3, 10, 7, 14];
  const findNumbers = findNumbersMoreThanTen(ogsNumbers);
  
  console.log(findNumbers); 


//   8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.

  function sumNumbers(numbers) {
    // Use the reduce method to sum all the numbers in the array
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  const originalNumbers = [5, 12, 8, 21, 3, 10, 7, 14];
  const sum = sumNumbers(originalNumbers);
  
  console.log(sum); 
  
//   9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the
// keys are user IDs and the values are the corresponding user objects.

function transformArrayToObject(users) {
    const result = {};
  
    // Iterate over each user object in the array
    users.forEach(user => {
      // Use user.id as the key and assign the user object to it
      result[user.id] = user;
    });
  
    return result;
  }
  
  const usersArray = [
          { id: 1, name: 'Sudarshan', age: 21 },
          { id: 2, name: 'Griffin', age: 3000 },
          { id: 3, name: 'Maili', age: 19 }
  ];
  
  const usersObject = transformArrayToObject(usersArray);
  
  console.log(usersObject);
  
//   10. Classes and Objects
//   Create a Person class with a constructor that accepts name and age parameters. Add a
//   method describe that returns a string describing the person.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  const person1 = new Person('Sudarshan', 30);
  console.log(person1.describe()); 
  
  const person2 = new Person('Bam', 25);
  console.log(person2.describe()); 
  

//   11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study
// that returns a string indicating the student is studying.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying.`;
    }
  }
 
  const student1 = new Student('Griffin', 20, 'A');
  console.log(student1.describe()); 
  console.log(student1.study());    
  
  const student2 = new Student('Maili', 22, 'B');
  console.log(student2.describe()); 
  console.log(student2.study());   
  

//   12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
// fetch data&quot;. Handle this error using .catch when calling the function.

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate a random delay before resolving or rejecting the promise
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("Data fetched successfully");
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, Math.random() * 2000); // Random delay between 0 to 2000 milliseconds
    });
  }
  
  // Calling the fetchData function and handling errors using .catch
  fetchData()
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error(error.message); 
    });
  

    // 13. Error Handling with Async/Await
    // Modify the fetchData function with async/await to handle errors using try/catch blocks.

    async function fetchData() {
        // Simulate a random delay before resolving or rejecting the promise
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
      
        // Simulate randomly rejecting the promise with an error message
        if (Math.random() < 0.5) {
          throw new Error("Failed to fetch data");
        }
      
        return "Data fetched successfully";
      }
      
      // Calling the fetchData function and handling errors using try/catch
      async function getData() {
        try {
          const data = await fetchData();
          console.log(data); 
        } catch (error) {
          console.error(error.message); 
        }
      }
      
      getData();
      

//       14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a
// function that returns an array of all unique hobbies using reduce.


      function getAllUniqueHobbies(users) {
        // Use reduce to accumulate all hobbies into a single array
        const allHobbies = users.reduce((accumulator, user) => {
          // Concatenate the hobbies array of each user with the accumulator array
          return accumulator.concat(user.hobbies);
        }, []);
      
        // Use Set to eliminate duplicates and then convert back to an array
        const uniqueHobbies = [...new Set(allHobbies)];
        
        return uniqueHobbies;
      }
     
      const users = [
        { name: 'Sudarshan', hobbies: ['reading', 'painting'] },
        { name: 'Griffin', hobbies: ['gardening', 'cooking', 'painting'] },
        { name: 'MAili', hobbies: ['reading', 'photography'] }
      ];
      
      const uniqueHobbies = getAllUniqueHobbies(users);
      console.log(uniqueHobbies);

      /*

// Conceptual Questions

// 1. JavaScript utilizes promises to deal with asynchronous operations in an easier way, hence keeping things more efficient.

1. Better Readability: A promise supports chaining for asynchronous operations via the syntax .then(), which keeps the code more understandable and readable.
2. Error Handling: Promises provide a kind of standardized method for error handling through .catch(), which improves error handling over ad hoc error handling inside callback functions.
3. Avoiding Callback Hell: Promises help avoid the problem of callback hell, where several nested callback functions can lead to unreadable and unmaintainable code.
4. Support for Async/Await: With promises, there is support for both sequential and parallel execution of asynchronous tasks, hence support for flexibility in the handling of complex asynchronous scenarios.

//2.  Closure can be defined as inner function has access to the other(outer) variables function.

function Person(name, age){

    this.name = name;
    this.age = age;
}

let john = new Person("Ram", 5);

console.log(john);

// 3. Callback function is a function passed as an argument to another function. It is used in JavaScript for asynchronous operations to handle the result of an asynchronous task once it is completed.

// 4. async/await is used to minimize code as well as for more readablity that allows writing asynchronous code in a synchronous.

// 5. 

-JS

. It supports primitive data types that are string, number, boolean, null, and undefined. 	
. There is only one way to define the variables by using the var keyword.

- ES6

.There are some additions to JavaScript data types. It introduced a new primitive data type ‘symbol’ for supporting unique values.
.There are two new ways to define variables that are let and const.

// 6. Some major features introduced in ES6 include:

1. Arrow functions
2. Template literals
3. Destructuring assignment
4. Default parameters
5. Rest parameters
6. Spread syntax
7. Classes
8. Promises
9. let and const for variable declarations
10. Modules
     
*/