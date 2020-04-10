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

function infixToPostfix(values) {

  let result = '';
  let stack = [];

  let splittedValues = values.split('');

  splittedValues.forEach((element, index, arr) => {
    // 1. if operand, add to the notation
    if (Number(element)) {
      result += element;
    } 
    
    // 2. If operator,
    if (isOperator(element)) {
      // 2.a if stack is empty, just push to the stack
      if(stack.length === 0) { 
        stack.push(element);
      } else { // 2.b if stack is not empty
        let lastOperator = stack[stack.length - 1];
        let currentOperator = element;
        // 2.b.i last operator in stack is equal or bigger than the current
        // operator - pop the last operator from stack, and add to the notation,
        // and push current operator to the stack
        if(isLastOperatorEqualOrBigger(lastOperator, currentOperator)) {
          lastOperator = stack.pop();
          result += lastOperator;
          stack.push(currentOperator);
        } else {
          // 2.b.ii last operator in stack is less than current operator, push
          // current operator to the notation
          stack.push(currentOperator);
        }
      }
    } // isOperator

    // 3. if infix notation ends..
    if(index === arr.length - 1) {
      stackLength = stack.length
      for (let i = 0; i < stackLength; i++) {
        result += stack.pop()
      }
    } // last element
  }) // forEach


  console.log(result)
  console.log(stack);
} // operate

// ÷
// 2 + 4 x 5 = 245x+
// 2 ÷ 2 x 5 = 
infixToPostfix('2+45');
infixToPostfix('2÷2x5');




