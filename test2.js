let decimalCount = false;
let number = '';

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse(); 
  let joinArray = reverseArray.join(""); 

  return joinArray; 
}



function checkExistingDecimal(str) {
  // true if there's a decimal, false when there's no decimal
  let decimalCount = false;
  let number = '';

  for(let i = str.length-1; i>=0; i--) {
    // if it's a number or a decimal
    if(Number(str[i]) || str[i] === '.') {
      number += str[i];
    } else {
      break;
    }
  }

  number = reverseString(number);
  // Now it's time to check if it has a decimal
  number.split('').forEach((element) => {
    if(element === '.') {
      decimalCount = true;
    }
  })

  return decimalCount;
}

console.log(checkExistingDecimal('.'));


