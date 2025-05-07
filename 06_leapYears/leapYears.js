const leapYears = function(years) {
    let date = years
    //if (date % 100 > 0) {
    if (date % 4 === 0 && (date % 100 > 0 || date % 400 === 0)) {    
        console.log(`The ${date} you have entered is a leap year`)
        console.log(`Divided by 4: ${date/4}, Remaider = ${date % 4}`)
        console.log(`Divided by 100: ${date/100}, Remaider = ${date % 100}`)
        console.log(`Divided by 400: ${date/400}, Remaider = ${date % 400}`)
        return true;
    } else {
        console.log(`The ${date} you have entered is not a leap year`)
        console.log(`Divided by 4: ${date/4}, Remaider = ${date % 4}`)
        console.log(`Divided by 100: ${date/100}, Remaider = ${date % 100}`)
        console.log(`Divided by 400: ${date/400}, Remaider = ${date % 400}`)
        return false;
    }
};

console.log(leapYears(1883));
console.log(leapYears(1800));
console.log(leapYears(2000));


// Do not edit below this line

/*
pseudo code

years that are divisible by 4 are called leap years. i.e 1984 and 2004
however years that are divisible by 100 are not leap year. i.e 1800 and 1900
however if its divisible by 400 that it's a leap year i.e 1600 and 2000;

*/

module.exports = leapYears;
