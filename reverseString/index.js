function reverseString(str) {
    return str.split('').reverse().join('');
}


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function longestWord(sentence) {
    return sentence.match(/\w+/g).reduce((a, b) => a.length >= b.length ? a : b);
}

console.log(isPalindrome("racecar")); // true
console.log(reverseString("hello")); // "olleh"
console.log(longestWord("Ceci est un test d'algorithme Coderbyte")); // "algorithme"