function mergeAndSortArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(mergeAndSortArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]





let mergedArray = [];
function mergeAndSortArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }

    for (let i = 0; i < mergedArray.length; i++) {
        for (let j = i + 1; j < mergedArray.length; j++) {
            if (mergedArray[i] > mergedArray[j]) {
                let temp = mergedArray[i];
                mergedArray[i] = mergedArray[j];
                mergedArray[j] = temp;
            }
        }
    }
    return mergedArray;
}
const array3 = [5, 3, 8, 1];
const array4 = [7, 2, 6, 4];
console.log(mergeAndSortArrays(array1, array2)); 
