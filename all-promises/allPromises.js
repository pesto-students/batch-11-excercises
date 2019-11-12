
const allPromises = (promises) => Promise.all(promises).catch(() => Promise);

export {
  allPromises,
};
