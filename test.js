const add = (numOne, numTwo) => {
  return numOne + numTwo;
};

const subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};

const multiply = (numOne, numTwo) => {
  return numOne * numTwo;
};

const divide = (numOne, numTwo) => {
  return numOne / numTwo;
};

// Create a new function operate that takes an operator and 2 numbers and then
// calls one of the above functions on the numbers

const operate = (operator, numOne, numTwo) => {
  if (operator === '+') {
    return add(numOne, numTwo);
  } 
  else if (operator === '-') {
    return subtract(numOne, numTwo);
  } 
  else if (operator === '*') {
    return multiply(numOne, numTwo);
  } 
  else if (operator === '/')  {
    return divide(numOne, numTwo);
  }
};

console.log(operate('-', 5, 10));
console.log(operate('+', 5, 10));
console.log(operate('*', 5, 10));
console.log(operate('/', 5, 10));