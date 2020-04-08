function checkNumber(element) {
  let currentNumber = 0;
  if (Number(element) || element === '.') {
    currentNumber += element
  }

  console.log(currentNumber);
}

checkNumber('.');