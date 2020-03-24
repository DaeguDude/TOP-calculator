let numberList = [5, 10, 15, 20, 5, 10, 10];
let operatorList = ['+', 'x', 'x', '÷', '+', '+'];

let numbers = [];
let operators = [];

function doBasicOperation(firstNum, secondNum, operator) {
  console.log('doBasicOperation function running');
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  console.log(`firstNum: ${firstNum}`);
  console.log(`secondNum: ${secondNum}`);

  if (operator === '+') {
    return firstNum + secondNum;
  } else if (operator === '-') {
    return firstNum - secondNum;
  } else if (operator === 'x') {
    return firstNum * secondNum;
  } else if (operator === '÷') {
    return firstNum / secondNum;
  } 
}

function isMultiplicationOrDivision(operator) {
  return (operator == 'x' || operator == '÷') ? true : false;
}

function returnWithoutMultiplicationAndDivision(numbers, operators) {
  let sum = 0;
  let index = 0;
  let operatorsLength = operators.length;

  for (let i = 0; i < operatorsLength; i++) {     
    let currentOperator = operators[index];
    let numOne = numbers[index];
    let numTwo = numbers[index+1];

    if(isMultiplicationOrDivision(operators[index])) {
      let currentResult = 0;// If it's multiplication or Division
      currentResult = doBasicOperation(numOne, numTwo, currentOperator);

      console.log(`${numOne} ${currentOperator} ${numTwo} = ${currentResult}`);

      numbers.splice(index, 2, currentResult);
      operators.splice(index, 1);
    } else {
      index++;  
    }
  }

  return [numbers, operators];
}

function calculateNumbers(numbers, operators) {
  let sum = 0;

  for (let i = 0; i < operators.length; i++) {     
    let currentOperator = operators[i]

    if (i == 0) { // if it's the first run, do operation and skip
      sum = doBasicOperation(numbers[i], numbers[i+1], currentOperator);
      continue;
    }

    // Otherwise...
    sum = doBasicOperation(sum, numbers[i+1], operators[i]); 
  }

  return sum;
}

numbers = returnWithoutMultiplicationAndDivision(numberList, operatorList)[0];
operators = returnWithoutMultiplicationAndDivision(numberList, operatorList)[1];
console.log(numbers);
console.log(operators);

console.log(calculateNumbers(numbers, operators));

