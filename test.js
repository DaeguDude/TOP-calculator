// How do you separate numbers and operators?
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

// Can you separate numbers from operators?
let displayValue = '578+320x10';

let displayValSplitted = displayValue.split('');
console.log(displayValSplitted);

let number = '';
let numberList = [];
let operatorList = [];

for(let i = 0; i < displayValSplitted.length; i++) {
  let currentElement = displayValSplitted[i]
  let nextElement = displayValSplitted[i+1];

  if (isOperator(currentElement)) {
    operatorList.push(currentElement);
    continue;
  }

  if(Number(currentElement) || currentElement == '.') {
    number += currentElement;
    if(isNaN(nextElement) && nextElement != '.' ) {
      numberList.push(number);
      number = '';
    }
  } 
}

console.log(numberList);
console.log(operatorList);