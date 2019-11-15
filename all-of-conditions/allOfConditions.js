
function allOfConditions(...predicates) {
  return (input) => {
    const callPredicates = (acc, predicate) => acc && predicate(input);
    predicates.reduce(callPredicates, true);
  };
}

export {
  allOfConditions,
};
