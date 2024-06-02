
let arr = [20,40,2,30,100];
let maxValue = arr[0];
function MaxValue(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
const maxNumber = MaxValue(arr);
console.log(maxNumber);
