
const allOfConditions = (...predicates) => (input) => predicates.reduce(
  (calledFunctionResult, predicate) => calledFunctionResult && predicate(input),
  true,
);

export {
  allOfConditions,
};
