
function sequentialPromise(promiseFunctions) {
  const mergePromises = (promiseOne, promiseTwo) => promiseOne.then((str) => promiseTwo(str));
  const sequentialPromises = (promises) => promises.reduce(mergePromises, Promise.resolve(''));

  const resolvedPromise = new Promise((resolve) => {
    sequentialPromises(promiseFunctions).then((resolvedMessage) => {
      resolve(resolvedMessage);
    });
  });

  return resolvedPromise;
}

export {
  sequentialPromise,
};
