
function findElement(numberArray) {

  let FoundedElement;

  numberArray.filter((checkNumber) => {

       if(checkNumber % 2 === 0){
          FoundedElement = checkNumber;
       }
  });

  return FoundedElement;
}

export {
  findElement,
};
