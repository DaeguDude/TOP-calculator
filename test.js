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


function isLastOperatorEqualOrBigger(last, cur) {
  // if current operator is Bigger, false
  // if currnet operator is less, true
  if (cur === last) {
    return true;
  }

  if (cur === '+' || cur === '-') {
    return true;
  } else {
    if (last === 'x' || last === '÷') {
      return true;
    } else {
      return false;
    }
  }
}

function isNumber(number) {
  // Check typeof and make sure it returns number
  // This code coerces neither booleans nor strings to numbers,
  // although it would be possible to do so if desired.
  if(typeof number !== 'number') {
    return false;
  }
}

function operate(values) {

  let result = '';
  let stack = [];

  let splittedValues = values.split('');

  splittedValues.forEach((element, index, arr) => {
    // If it's operand, just add to the result
    if (Number(element)) {
      result += element;
    } 
    
    // If it's operator, check if stack is empty and if it is push to the stack
    // If it's not empty, you need to check if last operator in the stack, check
    // if last operator is equal to or greater than current operator. If they
    // are pop the last operator and add to the result, and push the current
    // operator to the stack
    if (isOperator(element)) {
      if(stack.length === 0) { // stack empty
        stack.push(element);
      } else { // stack not empty
        let lastOperator = stack.pop();
        let currentOperator = element;

        // Add to check what operator is greater
      }
      
    }

    // If it's last element, add it to the result. Last element
    // comes first
    if(index === arr.length - 1) {
      stackLength = stack.length
      for (let i = 0; i < stackLength; i++) {
        result += stack.pop()
      }
    }
  })
}

operate('4-5');





