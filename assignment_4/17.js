function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } else {
        return str;
    }
}
const stringToTruncate = "The quick brown fox jumps over the lazy dog.";
let maxLength=22;
const truncateStrings=truncateString(stringToTruncate,maxLength)
console.log(truncateStrings); 
