function Palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return  "It is not palindrome";
      }
    }
    return "It is palindrome";
  }
  const strings = 'sunil';
  const strings1="noon";
  const palindromes= Palindrome(strings);
  console.log(palindromes);
  const palindromes1= Palindrome(strings1);
  console.log(palindromes1);