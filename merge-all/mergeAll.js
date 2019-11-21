
function mergeAll(objects) {
  return objects.reduce((accumulator, item) => Object.assign(accumulator, item), {});
}

export {
  mergeAll,
};
