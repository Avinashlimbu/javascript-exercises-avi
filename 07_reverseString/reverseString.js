const reverseString = function(text) {
    let result = "";
    if (text.trim().length === 0) {
        return "";
    }
    for (let mySplit of text) {
        result = text.split("");
        reverse = result.reverse();
        joined = reverse.join("");  
    return joined; // ?? "";
    }
    console.log (text);
    //console.log(reverse);
    //console.log (joined);
}


console.log(reverseString(""));



/*
This is my psuedo code
A function will return reverse string
pretty straigh forward

let a = ""
if that 

let text = "How are you doing today?";
let mySplit = text.split("");


*/
// Do not edit below this line
module.exports = reverseString;
