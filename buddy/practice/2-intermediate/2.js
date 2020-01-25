/**
===============
NON PALINDROME
===============
Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.
Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']
Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']
RULES:
- Tidak boleh menggunakan .reverse(), .join()
**/

function nonPalindrome(string) {
  // code goes here

  var array = [], tempString = '';
  for (i = 0; i <= string.length; i++) {
    if (string[i] === ' ' || i === string.length) {
      var isNotPal = true;
      for (j = 0; j < Math.floor(tempString.length/2); j++) {
        if (tempString[j].toLowerCase() === tempString[tempString.length-1-j]) {
          isNotPal = false;
        }
      }
      if (isNotPal) {array.push(tempString);}
      tempString = '';
    } else {
      tempString += string[i];
    }
  }
  return array;

}

console.log(nonPalindrome("Wow mereka janji bertemu di makam"));
//['mereka', 'janji', 'bertemu', 'di']

console.log(
  nonPalindrome("Katak naik honda civic pada malam hari di mimpi Dimitri")
);
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome("kasurrusak kalo dipisah menjadi kasur rusak"));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
