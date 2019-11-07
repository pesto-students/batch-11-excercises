
function diffArray(firstArrayForCompare, secondArrayForCompare) {

  const listWithAllDifferences = [];

  firstArrayForCompare.forEach((arrayElement) => {
    if (!secondArrayForCompare.includes(arrayElement)){ 
      listWithAllDifferences.push(arrayElement);
    }
  });

  secondArrayForCompare.forEach((arrayElement) => {
    if (!firstArrayForCompare.includes(arrayElement)){
      listWithAllDifferences.push(arrayElement);
    }
  });

  return listWithAllDifferences;
}

export {
  diffArray,
};
