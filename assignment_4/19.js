function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
const arrayWithFalsyValues = [0, false, '', undefined, NaN, null, 42];
console.log(removeFalsyValues(arrayWithFalsyValues));
