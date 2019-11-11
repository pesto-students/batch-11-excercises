
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

// functional implementation
// TODO: Check this
// function allOfConditions(...predicates) {
//   return (input) => predicates.reduce((acc, predicate) => acc && predicate(input), true);
// }

export {
  allOfConditions,
};
