
function booleanExpressionEvaluator(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string.');
  }
  return Boolean(input);
}

export {
  booleanExpressionEvaluator,
};
