function allOfConditions(cbFunctions) {
  return function checkFn(input) {
    for (let i = 0; i < cbFunctions.length; i += 1) {
      if (cbFunctions[i](input) === false) {
        return;
      }
    }
  };
}

export {
  allOfConditions,
};
