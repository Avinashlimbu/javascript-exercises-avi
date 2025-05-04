
const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    let addingString = "";
    for (let i = 1; i <= num; i++) {
        addingString = addingString + string;
    }
    return addingString;
};

console.log(repeatString("hey", 3))

/* 
function myString (string, num) {
    for (; num < 3; num++) {
        console.log(string)
    }

}

if num = 3
repeat the string three time in the same line! 
if num = 4 
it should repeart the string 4 times in the same line
everytime i call the function 
there should a variable that stores in that string that we want by giging it a number




*/

// Do not edit below this line
module.exports = repeatString;
