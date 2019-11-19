
function without(valuesToRemove, allValues) {
  if (valuesToRemove.includes(NaN) || allValues.includes(NaN)) {
    return [];
  }
  return allValues.reduce((acc, curr) => {
    if (!valuesToRemove.includes(curr) || isNegativeZero(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

const isNegativeZero = (x) => x === 0 && (1 / x < 0);

export {
  without,
};
