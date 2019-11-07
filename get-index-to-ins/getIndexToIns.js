
function getIndexToIns(...args) {
  const [numArray, toInsert] = args;
  const sortedNumArray = numArray.sort((a, b) => a - b);
  let lowestIns = sortedNumArray.length;
  for (let i = 0; i < sortedNumArray.length; i++) {
    if (sortedNumArray[i] >= toInsert) {
      lowestIns = i;
      return lowestIns;
    }
  }
  return lowestIns;
}

export {
  getIndexToIns,
};
