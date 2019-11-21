
function mergeAll(objects) {
  return objects.reduce((accumulator, object) => Object.assign(accumulator, object), {});
}

export {
  mergeAll,
};
