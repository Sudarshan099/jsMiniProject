// 1. Right-Angled Triangle:
// *
// **
// ***
// ****
// *****

// let rows = 5; 
// for (let i = 1; i <= rows; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// 2. Solid Rectangle:
// *******
// *******
// *******
// *******
// *******

// let rows = 5; 
// let columns = 7; 
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= columns; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// 3. Inverted Triangle:
// *****
// ****
// ***
// **
// *

// let rows = 5; 
// for (let i = rows; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// 4. Pyramid:
// *
// ***
// *****
// *******
// *********

// let rows = 5; 
// for (let i = 1; i <= rows; i++) {
//   let spaces = "";
//   for (let j = 1; j <= rows - i; j++) {
//     spaces += " ";
//   }
//   let stars = "";
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     stars += "*";
//   }
//   console.log(spaces + stars);
// }

// 5. Inverted Pyramid:
// *********
//  *******
//   *****
//    ***
//     *

// let rows = 5; 
// for (let i = rows; i >= 1; i--) {
//   let spaces = "";
//   for (let j = 1; j <= rows - i; j++) {
//     spaces += " ";
//   }
//   let stars = "";
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     stars += "*";
//   }
//   console.log(spaces + stars);
// }

// 6. Hollow Rectangle:
// *******
// * *
// * *
// * *
// *******


// 7. Cross:
// * *
// * *
// *
// * *
// * *


// 8. X:

// * *
// * *
// *
// * *
// * *


// 9. Number Triangle:
// 1
// 12
// 123
// 1234
// 12345

// let rows = 5; 
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// 10. Repeated Number Triangle:
// 1
// 22
// 333
// 4444
// 55555

// let rows = 5; 
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += i;
//   }
//   console.log(line);
// }

// 11. Inverted Number Triangle:
// 12345
// 1234
// 123
// 12
// 1

// let rows = 5; 
// for (let i = rows; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// 12. Inverted Number Square:
// 54321
// 54321
// 54321
// 54321
// 54321

// let n = 5; 

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = n; j > 0; j--) {
//         row += j;
//     }
//     console.log(row);
// }

// 13. Right-Aligned Triangle:
// *
// **
// ***
// ****
// *****

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// 14. Inverted Number Ladder:
// 12345
// 1234
// 123
// 12
// 1

// let rows = 5; 
// for (let i = rows; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// 15. Alphabet Triangle:
// A
// AB
// ABC
// ABCD
// ABCDE

let n = 5; 

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j); // Convert number to corresponding ASCII letter
    }
    console.log(row);
}