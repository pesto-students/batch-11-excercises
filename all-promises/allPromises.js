
function allPromises(promises) {
  const results = [];
  const promisesFulfilled = 0;
  return new Promise((resolve) => {
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise.then(x => {
          results.push(x);
        });
      } else {
        let createdPromise = Promise.resolve(promise);
        createdPromise.then(x => {
          results.push(x)
        });
      }
    });
    resolve(results);
  });
}

export {
  allPromises,
};
