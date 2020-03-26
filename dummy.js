function operate() {
  let sum = 0;

  let displayValueSplitted = displayValue.split('');
  
  displayValueSplitted.forEach(element => {
    
  })
  
  
  numbers = returnWithoutMultiplicationAndDivision(numbers, operators)[0];
  operators = returnWithoutMultiplicationAndDivision(numbers, operators)[1];
  
  // so...if there's nothing left in the operator...it's done
  if (operators.length == 0) {
    sum = numbers[0];
  } else { // if there's some operators left in the operator
    sum = calculateNumbers(numbers, operators);
  }
  
  display.innerHTML = sum;
}

function doBasicOperation(firstNum, secondNum, operator) {
   
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

function extractNumbers(array1) {
  return array1.filter(str1 => isNaN(str1) == false) 
}

function putNumbersIntoTheList(array1) {
  inputList = extractNumbers(array1);
}

// DONE
// Check for if it's one of the basic operators
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

function isMultiplicationOrDivision(operator) {
  return (operator == 'x' || operator == '÷') ? true : false;
}

// It takes number List and operator List, and return
// numbers List calculated regarding to the multiplications and 
// Divisions, and return operators without any multiplications and
// Divisions.
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

// It takes number & operator Lists without multiplications and divisions
// and return the sum after operating all the operations on the numbers
// regarding to operators.
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

  console.log(`sum in calculatedNumbers function: ${sum}`);
  return sum;
}

// Now it's time to read display Value