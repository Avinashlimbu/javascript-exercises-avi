const convertToCelsius = function(fahrenheit) {
  let y = fahrenheit;
  return Math.ceil((((y - 32) * (5/9))) *10)/10; //added 10  for one decimal place
};

const convertToFahrenheit = function(celsius) {
  let x = celsius; 
  return Math.ceil((((x * (9/5)) +  32) *10 ))/10; //added 10  for one decimal place
};


console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));



// Do not edit below this line

/*
This is where i am writing my pseudo code
I need to write two function
one for celcius and the other for fahrenheit

fahrenheit to celsius is below
x celcius(x) = ((x * (9/5)) +  32)  
celsius to fahrenheit is below
fahrenheit(y) = (y-32) x 5/9

*/

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
