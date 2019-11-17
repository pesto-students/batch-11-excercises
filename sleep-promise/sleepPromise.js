
function sleepPromise(delay) {
  return new Promise(resolve => setTimeout(() => resolve('test'), delay));
}

export {
  sleepPromise,
};
