let number = 2;

function checkEvenOrOdd(num) {
    if (num % 2 == 0) {
        return `${num} is an even number`;
    } else {
        return `${num} is an odd number`;
    }
}

const oddOrEven = checkEvenOrOdd(number);
console.log(oddOrEven);
