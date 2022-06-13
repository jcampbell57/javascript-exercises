const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	let sum = 0
  for (i=0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

const multiply = function(arr) {
	let answer = 1;
  for (i=0; i < arr.length; i++) {
    answer *= arr[i];
  };
  return answer;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(input) {
	let answer = 1;
  if (input === 0) {
    return answer
  } else {
    for (i=input-1; i>0; i--) {
      input *= i;
    }
    return input
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
