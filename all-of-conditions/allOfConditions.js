
function allOfConditions(...predicates) {
  return function runPredicates(inputToPredicates) {
    for (const predicate of predicates) {
      if (predicate(inputToPredicates) === false) {
        break;
      }
      predicate(inputToPredicates);
    }
  };
}

export {
  allOfConditions,
};
