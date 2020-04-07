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

let displayValue = '15+4-5x3';

let a =returnNumbersAndOperators(displayValue);
console.log(a.numberList);
console.log(a.operatorList);
