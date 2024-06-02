function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year = 2024;
const lPy = LeapYear(year);
console.log(lPy);