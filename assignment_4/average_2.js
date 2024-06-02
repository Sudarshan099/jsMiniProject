function calculateAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

const numbers = [1, 6, 7, 9, 10];
const average = calculateAverage(numbers);
console.log(average);
