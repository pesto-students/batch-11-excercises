
function sequentialPromise(tasks) {
  let result = Promise.resolve();
  tasks.forEach((task) => {
    result = result.then((value) => task(value));
  });
  return result;
}

export {
  sequentialPromise,
};
