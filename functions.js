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

// is Decimal? True or False
function isDecimal(num1) {
if (num1 % 1 != 0) {
  return true
} else {
  return false
}
}

// is Operator? True or False
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

// is Multiply or Divide? True or False
function isMultiplyOrDivide(operator) {
  return (operator == 'x' || operator == '÷') ? true : false;
}

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

function decimalOperate(operator, num1, num2) {
  let sum = 0
  if (operator == '+') {
    num1 = new Big(num1);
    sum = num1.plus(num2)
    return Number(sum.valueOf())
  } 
  else if (operator == '-') {
    num1 = new Big(num1);
    sum = num1.minus(num2)
    return Number(sum.valueOf())
  } 
  else if (operator == 'x') {
    num1 = new Big(num1);
    sum = num1.times(num2)
    return Number(sum.valueOf())
  } 
  else if (operator == '÷') {
    num1 = new Big(num1);
    sum = num1.div(num2)
    return Number(sum.valueOf())
  }
}

function returnNumbersAndOperators(displayValue) {
  if (displayValue.length == 0) {
    return displayValue; // return as is
  } else {
    let displayValueArray = displayValue.split('');
    let currentNumber = 0;
    let numberList = [];
    let operatorList = [];

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
    return {
      numberList: numberList,
      operatorList: operatorList,
    };
  } 
} 

function calculateMultiplyAndDivision(numberList, operatorList) {
  numberList = Array.from(numberList);
  operatorList = Array.from(operatorList);
  
  let index = 0;
  let result = 0;
  let currentOperator = '';
  let firstNum = 0;
  let secondNum = 0;
  let operatorListLength = operatorList.length;

  for (let i = 0; i < operatorListLength; i++) {
    result = 0;
    
    currentOperator = operatorList[index];
    firstNum = numberList[index];
    secondNum = numberList[index+1];

    
    if (isMultiplyOrDivide(currentOperator)) {
      if (isDecimal(firstNum) || isDecimal(secondNum)) {
        result = decimalOperate(currentOperator, firstNum, secondNum);
      } else {
        result = operate(currentOperator, firstNum, secondNum);
      }
      numberList.splice(index, 2, result);
      operatorList.splice(index, 1);
    } else {
      // index is incrased, because the operator wasn't 'x' or '/', so that
      // we need to move on to the next element
      index++;
    }
  }

  return {
    numberList: numberList,
    operatorList: operatorList
  };
}

function calculateAdditionAndSubtraction(numberList, operatorList) {
  // If there's some +, - left in the operatorList
  let firstNum = 0;
  let secondNum = 0;
  let sum = 0;
  let currentOperator = '';

  for(let i = 0; i < operatorList.length; i++) {
    firstNum = numberList[i];
    secondNum = numberList[i+1];
    currentOperator = operatorList[i];

    // For the first operation
    if (i == 0) {
      if(isDecimal(firstNum) || isDecimal(secondNum)) {
        sum = decimalOperate(currentOperator, firstNum, secondNum);  
      } else {
        sum = operate(currentOperator, firstNum, secondNum);
      }
      continue;
    }

    // Since the second operation
    if(isDecimal(firstNum) || isDecimal(secondNum)) {
      sum = decimalOperate(currentOperator, sum, secondNum);
    } else {
      sum = operate(currentOperator, sum, secondNum);
    }
  }

  return sum;
}