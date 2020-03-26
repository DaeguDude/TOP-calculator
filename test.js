function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Takes one operator, and two numbers and then calls one of the
// basic operation functions
function operate(operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2)
  } else if (operator == '-') {
    return subtract(num1, num2)
  } else if (operator == 'x') {
    return multiply(num1, num2)
  } else if (operator == '÷') {
    return divide(num1, num2)
  }
}

function isOperator(operator) {
  if (
    operator === '+'
    || operator === '-'
    || operator === 'x'
    || operator === '÷'
  ) {
    return true;
  } else {
    return false;
  }
}

let numbers = [];
let operators = [];
let currentNumber = '';

let displayValue = '52.5+10-52.5x52.5x10';
function breakDownNumbersOperators() {
  let displayValueArray = displayValue.split('');

  displayValueArray.forEach((element, index, arr) => {

    if( isNaN(Number(element)) && element != '.' ) {
      // Not a Number or a decimal
    } else if(element == '.') {
      // Decimal
      currentNumber += element;
    } else {
      // Number
      currentNumber += element;
    }

    // If it's operator, add number and operator to the regarding list
    if(isOperator(element)) {
      numbers.push(currentNumber);
      operators.push(element);
      currentNumber = '';
    }

    // If it's the end of the array, add the current number to the Numbers
    if(index === arr.length - 1) {
      numbers.push(currentNumber);
      currentNumber = '';
    }
  });
}

console.log(`before function: ${numbers}`);
console.log(`before function: ${operators}`);
breakDownNumbersOperators();
console.log(`after function: ${numbers}`);
console.log(`after function: ${operators}`);




