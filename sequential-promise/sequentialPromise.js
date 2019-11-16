function sequentialPromise(array) {
  return array.reduce((previousPromise, currentPromise) => previousPromise
    .then(currentPromise),
  Promise.resolve());
}

export {
  sequentialPromise,
};
