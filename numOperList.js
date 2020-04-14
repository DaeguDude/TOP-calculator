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

function isParenthesis(operator) {
  if (operator === '(' || operator == ')') {
    return true;
  } else {
    return false;
  }
}


function returnNumbersAndOperators(displayValue) {
  if (displayValue.length == 0) {
    return displayValue; // return as is
  } else {
    let displayValueArray = displayValue.split('');
    let currentNumber = '';
    let infixNotationArray = [];

    displayValueArray.forEach((element, index, arr) => {

      // If it's a number or a decimal I will add it to the currentNumber
      // currentNumber will be pushed if it meets parenthesis or operators
      // And also at the end of an Array
      
      // Things to note: when you meet parenthesis or operators, before you
      // push, you must check if 'currentNumber' is empty or not.
      
      // if it's empty, just push itself to the infixNotationArray.
      // if it's not empty, push currentNumber and operators or parenthesis too



      if( isNaN(Number(element)) && element != '.' ) {
        // Not a Number or a decimal
      } else if(element == '.') {
        // Decimal
        currentNumber += element;
      } else {
        // Number
        currentNumber += element;
      }

      if(isOperator(element) || isParenthesis(element)) {
        if(currentNumber.length === 0) { // there's no number to push
          infixNotationArray.push(element)
        } else { // there's a number to push
          currentNumber = Number(currentNumber);
          infixNotationArray.push(currentNumber);
          infixNotationArray.push(element);
          currentNumber = '';
        }
      }

      // If it's the end of the array, add the current number to the Numbers
      if(index === arr.length - 1) {
        if (element != ')') {
          currentNumber = Number(currentNumber);
          infixNotationArray.push(currentNumber);
          currentNumber = '';
        }
      }
    });
    
    return infixNotationArray;
  } 
} 

console.log(returnNumbersAndOperators('(40.3+50)x50'));