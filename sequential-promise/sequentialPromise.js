
function sequentialPromise(promiseFnList) {
  const concatPromise = (promiseOne, promiseTwo) => promiseOne.then((str) => promiseTwo(str));
  const sequentialisePromiseList = (promiseList) => promiseList.reduce(concatPromise, Promise.resolve(''));

  const resultPromise = new Promise((resolve) => {
    sequentialisePromiseList(promiseFnList).then((resolvedString) => {
      resolve(resolvedString);
    });
  });

  return resultPromise;
}

export {
  sequentialPromise,
};
