let displayValue = '';

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
function breakDownNumbersOperators() {
  let displayValueArray = displayValue.split('');
  console.log(`array: ${displayValueArray}`);
  numberList = [];
  operatorList = [];

  displayValueArray.forEach((element, index, arr) => {
    
    console.log(`array: ${displayValueArray}`);

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

breakDownNumbersOperators();

console.log(`displayValue: ${displayValue}`);