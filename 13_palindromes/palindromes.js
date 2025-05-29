const palindromes = function (word) {
    word = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverse = word.split("").reverse().join("");
    console.log(reverse);
    console.log(word);
    return word === reverse; 
};


console.log(palindromes("racecar"))
console.log(palindromes("racecar!@#"))
console.log(palindromes("A car, a man, a maraca."))
console.log(palindromes('ZZZZ car, a man, a maracaz.'))


// Do not edit below this line
module.exports = palindromes;
