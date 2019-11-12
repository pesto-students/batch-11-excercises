
function isPromise(maybePromise) {
  return maybePromise ? typeof maybePromise.then === 'function' : false;
}

export {
  isPromise,
};
