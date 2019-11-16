
function sequentialPromise(tasks) {
  let result = Promise.resolve();
  tasks.forEach((task) => {
    result = result.then((val) => task(val));
  });
  return result;
}

export {
  sequentialPromise,
};
