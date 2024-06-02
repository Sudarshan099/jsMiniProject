function capitalizeFirstLetter(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}
const sentence = "the quick brown fox jumps over the lazy dog";
const cfl = capitalizeFirstLetter(sentence);
console.log(cfl); 
