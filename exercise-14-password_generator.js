function changeVocals (str) {
    
    var newStr = '';
    var vocalChars = 'aeiouAEIOU', nextChars = 'bfjpvBFJPV';
    for (i = 0; i < str.length; i++) {
        var isVocal = false;
        for (j = 0; j < vocalChars.length; j++) {
            if (str[i] === vocalChars[j]) {
                isVocal = true; 
                break;
            }
        }
        if (isVocal) {
            newStr += nextChars[j];
        } else {
            newStr += str[i];
        }
    }
    return newStr;

}
  
function reverseWord (str) {
    
    var newStr = '';
    for (i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;

}
  
function setLowerUpperCase (str) {

    var newStr = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;

}
  
function removeSpaces (str) {
    
    var newStr = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        }
    }
    return newStr;

}
  
function passwordGenerator (name) {

    if (name.length >= 5) {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter.';
    }
    
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'