
function isPromise(thisFunction) {
  const itHasThenFunction = (func) => typeof func.then === 'function';
  return thisFunction ? itHasThenFunction(thisFunction) : false;
}

export {
  isPromise,
};
