
function allPromises(promiseFunctions) {
  return new Promise((resolve) => {
    Promise.all(promiseFunctions.map((value) => value))
      .then((value) => {
        resolve(value);
      });
  });
}

export {
  allPromises,
};
