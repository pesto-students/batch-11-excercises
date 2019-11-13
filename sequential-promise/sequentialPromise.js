function sequentialPromise(inputPromises) {
  const accumulator = (acc, el) => acc.then((str) => el(str));
  const sequentialPromiseList = inputPromises.reduce(accumulator, Promise.resolve(1));
  return new Promise((resolve) => {
    sequentialPromiseList.then((resolvedString) => resolve(resolvedString));
  });
}

export {
  sequentialPromise,
};
