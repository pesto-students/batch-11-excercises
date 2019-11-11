
function allOfConditions(...functions) {
  return function output(input) {
    for (const fn of functions) {
      const toContinue = fn(input);
      if (!toContinue) return;
    }
  };
}

export {
  allOfConditions,
};
