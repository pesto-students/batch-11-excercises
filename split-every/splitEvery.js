
function splitEvery(length, elements) {
  if (length < 1) throw new Error('Length should be 1 or greater than 1');
  const elementsArray = Array.from(elements);
  const splitArray = [];
  while (elementsArray[0]) {
    splitArray.push(elements.splice(0, length));
  }
  return splitArray;
}

export {
  splitEvery,
};
