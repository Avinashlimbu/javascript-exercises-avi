
const sumAll = function (para1, para2) {
    finalSum  = 0;
    let start = Math.min(para1, para2);
    let end = Math.max(para1, para2);
    if (start <= 0 || end <= 0 || !Number.isInteger(start) || !Number.isInteger(end) || typeof (para1, para2) !== 'number') {
        return "ERROR"; 
        }
        let i = start;
        do {
            finalSum += i;
            i++;
        } while (i <= end);
        return finalSum;
    } 


console.log(sumAll(2, 5));


/*
function sumAll(num1, num2) {
    let begin = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    sum = 0;
    
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
}
 
sumAll(1, 5);
*/
// Do not edit below this line
module.exports = sumAll;

