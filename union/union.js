
function union(firstArray, secondArray) {
  const resultArray = secondArray.reduce((acc, current) => {
    if (firstArray.includes(current)) {
      if (current === 0 && !Object.is(current, firstArray[firstArray.indexOf(current)])) {
        acc.push(current);
      }
    } else {
      acc.push(current);
    }
    return acc;
  }, firstArray);

  return resultArray;
}

export {
  union,
};
