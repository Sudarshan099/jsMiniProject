//positive nigative

let num = 0.1;
if(num < 0){
    console.log("Negative");
}
else{
    console.log("Positive");
}

let num1 = -1;

switch (true){
    case num1 < 0 :
    console.log("Negative");
    break;
    default:
    console.log("POsitive")
}

// given string is longer than 10 character 

let char = " sudarshannnnnnn";
length = char.length;
if(length > 10){
    console.log("longer than 10");
}
else {
    console.log("smaller than 10");
}

//leap year

let year = 2024;

if (year % 4 === 0 && year % 100 !== 0) {
    console.log("leap year");
}
else {
    console.log("Not a leap year");
}