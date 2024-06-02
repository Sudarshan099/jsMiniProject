function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 50;
const maxNumber = 500;
const randomNumber = generateRandomNumber(minNumber, maxNumber);
console.log(`Random number between ${minNumber} and ${maxNumber}: ${randomNumber}`);
