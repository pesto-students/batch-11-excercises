
function isPromise(getPromise) {
  return getPromise ? typeof getPromise.then === 'function' : false;
}

export {
  isPromise,
};
