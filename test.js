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

let numberList = [];
let operatorList = [];
let currentNumber = '';
let sum = 0;

let displayValue = '5x3-2x4-6÷2';
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
      currentNumber = Number(currentNumber);
      numberList.push(currentNumber);
      operatorList.push(element);
      currentNumber = '';
    }

    // If it's the end of the array, add the current number to the Numbers
    if(index === arr.length - 1) {
      currentNumber = Number(currentNumber);
      numberList.push(currentNumber);
      currentNumber = '';
    }
  });
}

function isMultiplyOrDivide(operator) {
  return (operator == 'x' || operator == '÷') ? true : false;
}

// Takes numberList and operatorList, and removes all the 'x' and '/' from it,
// and returns numberList and operatorList as an array 
function calculateMultiplyAndDivision(numbers, operators) {
  let index = 0;
  let result = 0;
  let currentOperator = '';
  let operatorsLength = operators.length;

  for (let i = 0; i < operatorsLength; i++) {
    result = 0;
    
    currentOperator = operators[index];
    
    if (isMultiplyOrDivide(currentOperator)) {
      
      result = operate(currentOperator, numbers[index], numbers[index+1]);
      numbers.splice(index, 2, result);
      operators.splice(index, 1);
    } else {
      // index is incrased, because the operator wasn't 'x' or '/', so that
      // we need to move on to the next element
      index++;
    }
  }

  return [numbers, operators];
}


// If equal is clicked...
breakDownNumbersOperators();
console.log(calculateMultiplyAndDivision(numberList.slice(0), operatorList.slice(0)));
 

  


console.log(numberList);
console.log(operatorList);







