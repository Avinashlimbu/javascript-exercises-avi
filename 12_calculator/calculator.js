const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
 };

const sum = function(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
     total += a[i];
  }
  return total;
};
console.log(sum([5, 6, 7]))

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	let multiple = 1;
  for (let i = 0; i < b; i++) {
    multiple = multiple * a;
  }
  return multiple;

};

console.log(power(4, 3));

const factorial = function(a) {
	let multiple = 1;
  for (let i = 0; i < a; i++) {
    multiple = multiple * a;
  }
  return multiple;
};

// // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
