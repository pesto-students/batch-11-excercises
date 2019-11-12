
function isIterable(parameterValue) {
  if (parameterValue[Symbol.iterator] === null) {
    return false;
  }
  return typeof parameterValue[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
