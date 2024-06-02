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
console.log(countOccurrences(numbers, elementToCount));
