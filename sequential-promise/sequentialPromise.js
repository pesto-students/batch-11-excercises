
function sequentialPromise(promises) {
  return promises.reduce((accumulator, promise) => accumulator.then(promise), Promise.resolve());
}

export {
  sequentialPromise,
};
