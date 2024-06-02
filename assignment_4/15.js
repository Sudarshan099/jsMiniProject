function secondSmallest(arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray[1];
}
const numbersArray = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(secondSmallest(numbersArray)); 