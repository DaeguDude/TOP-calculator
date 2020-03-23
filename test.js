let operators = ['x', '-', '-', '+', '÷'];

function isMultiplicationOrDivision(operator) {
  return (operator == 'x' || operator == '÷') ? true : false;
}

function findIndexMultiplicationAndDivision(array1) {
  let indexLocations = []
  
  for (let i = 0; i < array1.length; i++) {
    
    if(isMultiplicationOrDivision(array1[i])) {
      console.log(`satisfied: ${array1[i]}, ${i}`);
      indexLocations.push(i);
    } 
  }

  return indexLocations;
}

console.log(findIndexMultiplicationAndDivision(operators));