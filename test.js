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

// Takes one operator, and two numbers and then calls one of the
// basic operation functions
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

function isDecimal(num1) {
  if (num1 % 1 != 0) {
    return true
  } else {
    return false
  }
}












