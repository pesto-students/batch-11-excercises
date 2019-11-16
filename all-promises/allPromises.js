const allPromises = (promises) => new Promise((resolve) => {
  Promise.all(promises.map((value) => value))
    .then((value) => {
      resolve(value);
    });
});
export {
  allPromises,
};
