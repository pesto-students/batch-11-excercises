
function allOfConditions(...predicates) {
  return (input) => predicates.reduce((acc, fn) => acc && fn(input), true);
}

export {
  allOfConditions,
};
