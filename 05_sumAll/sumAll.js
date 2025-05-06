/*
const sumAll = function(sumA, sumB) {
 for(; sumA <= 10; sumA+=sumB) {
   return sumA + sumB;
 }
}

console.log(sumAll)
sumAll(2, 4);

//console.log(sumAll(2));
*/


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
//console.log(sumAll(1,4));




// Do not edit below this line
module.exports = sumAll;

