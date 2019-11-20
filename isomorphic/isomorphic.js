function isomorphic(stringArray) {
  let [firstString, compareString] = [...stringArray];
  const object = {};
  const compareObject = {};
  firstString = firstString.split("");
  compareString = compareString.split("");

  if (firstString.length !== compareString.length) {
    return false;
  }

  for (let i = 0; i < firstString.length; i += 1) {
    if (
      object[firstString[i]] === undefined &&
      compareObject[compareString[i]] === undefined
    ) {
      object[firstString[i]] = 1;
      compareObject[compareString[i]] = 1;
    } else {
      object[firstString[i]] += 1;
      compareObject[compareString[i]] += 1;
    }
  }

  firstString = Object.values(object);
  compareString = Object.values(compareObject);

  return firstString.every((element, index, arr) => {
    if (arr[index] !== compareString[index]) {
      return false;
    }
    return true;
  });
}
export { isomorphic };
