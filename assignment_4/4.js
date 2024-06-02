let revstring="";
function reversestring(strings){
    for(let i=strings.length-1; i>=0; i--){
        revstring +=strings[i];
    }
    return revstring;
}
const str ="sunil";
const reversestrings =reversestring(str);
console.log(reversestrings);