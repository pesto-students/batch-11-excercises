
function sequentialPromise(promiseFnList) {
  const sequentialisePromise = (promiseList) => promiseList.reduce((acc, promiseFn) => acc.then((resolvedAccStr) => promiseFn(resolvedAccStr)), Promise.resolve(''));

  const resultPromise = new Promise((resolve) => {
    sequentialisePromise(promiseFnList).then((resolvedString) => {
      resolve(resolvedString);
    });
  });

  return resultPromise;
}

export {
  sequentialPromise,
};
