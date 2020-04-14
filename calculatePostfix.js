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

function isParenthesis(operator) {
  if (operator === '(' || operator == ')') {
    return true;
  } else {
    return false;
  }
}

function isLastOperatorEqualOrBigger(last, cur) {
  // if last operator is Equal or bigger, true
  // if last operator is less, false

  // if last operator is '(', last operator is less
  if (last === '(') {
    return false;
  }
  
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

function returnNumbersAndOperators(displayValue) {
  // Parameters
  //     displayValue: string

  // returns an array of numbers and operators in the order
  // This CAN'T handle wrong expressions yet
  // ex) 50 x 50 +  throws an error
  
  if (displayValue.length == 0) {
    return displayValue; // return as is
  } else {
    let displayValueArray = displayValue.split('');
    let currentNumber = '';
    let infixNotationArray = [];

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

function infixToPostfix(infixArray) {
  // parameter
  //    infixArray: Array
  
  // Takes an array of infixNotation and returns an array of postfix Notation
  let postfixNotation = [];
  let stack = [];

  infixArray.forEach((element, index, arr) => {
    // 1. if operand, add to the notation
    if (typeof element === 'number') {
      postfixNotation.push(element);
    } 
    
    // 2-1. If operator,
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
          postfixNotation.push(lastOperator);
          stack.push(currentOperator);
        } else {
          // 2.b.ii last operator in stack is less than current operator, push
          // current operator to the stack
          stack.push(currentOperator);
        }
      }
    } // isOperator

    // 2-2 if parenthesis 
    if (isParenthesis(element)) {
      if(element === '(') {
        stack.push(element);
      } else { // closing parenthesis
        
        let stackLength = stack.length;
        for (let i= stackLength - 1; i >= 0; i--) {
          let poppedElem = stack.pop();
          if (poppedElem != '(') {
            postfixNotation.push(poppedElem);
          } else { // if it is '(', finish the loop
            break;
          }
        }  
      }
    }

    // 3. if infix notation ends..
    if(index === arr.length - 1) {
      stackLength = stack.length
      for (let i = 0; i < stackLength; i++) {
        postfixNotation.push(stack.pop());
      }
    } // last element
  }) // forEach


  return postfixNotation;
} 

function calcPostfix(postfixArray) {
  let numStack = [];
  for (let i = 0; i < postfixArray.length; i++) {
    let curElem = postfixArray[i];
    if(Number(curElem)) { // operand, push to the stack
      numStack.push(Number(curElem));
    } else { // operator, pop last 2 elements, and do calculatioin regarding
             // to the operator
      let firstNum = 0;
      let secondNum = 0;
      let operator = curElem;
      let result = 0;
      secondNum = numStack.pop();
      firstNum = numStack.pop();

      result = operate(operator, firstNum, secondNum);
      numStack.push(result);
    }

    // When it's end,
    if(i === postfixArray.length - 1) {
      return numStack[0];
    }
  }
}

let infixArr = returnNumbersAndOperators('(4+5)x(0+11)');
console.log(infixArr);
let postfixArr = infixToPostfix(infixArr);
console.log(postfixArr);
console.log(calcPostfix(postfixArr));