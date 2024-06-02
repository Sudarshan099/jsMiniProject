

// function containsOnlyDigits(str) {
//     return /^\d+$/.test(str);
// }

// console.log(containsOnlyDigits("54312")); 
// console.log(containsOnlyDigits("143a6")); 





function containsOnlyDigits(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}
const str="54312"
const str1="143a6"
const OnlyDigits = containsOnlyDigits(str);
console.log(OnlyDigits); 
console.log(containsOnlyDigits(str1));