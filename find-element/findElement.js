
function findElement(numberArray,EliminateUncondtionalNumbers) {

  const [firstElementFound] = [...numberArray.filter(EliminateUncondtionalNumbers)];
  return firstElementFound;
}

export {
  findElement,
};
