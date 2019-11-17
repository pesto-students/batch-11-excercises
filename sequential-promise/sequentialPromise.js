
function sequentialPromise(actions) {
  return new Promise((resolve) => {
    let promise = Promise.resolve('');
    actions.forEach(action => promise = promise.then(val => action(val)));
    resolve(promise);
  });
}

export {
  sequentialPromise,
};
