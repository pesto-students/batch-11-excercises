function diffArray(firstArray, secondArray) {
  let differenceArray = [];
  for (let item of firstArray) {
    if (!secondArray.includes(item)) {
      differenceArray.push(item);
    }
  }

  for (let item of secondArray) {
    if (!firstArray.includes(item)) {
      differenceArray.push(item);
    }
  }

  return differenceArray;
}

export { diffArray };
