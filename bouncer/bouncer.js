
function removeFalsyValues(mixedValuesArray) {
  // One liner
  // return mixedValuesArray.filter(Boolean);

  function isFalsy(valueToCheck) {
    return Boolean(valueToCheck);
  }

  return mixedValuesArray.filter(isFalsy);
}

export {
  removeFalsyValues,
};
