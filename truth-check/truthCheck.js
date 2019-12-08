
function truthCheck(collection, predicate) {
  return collection.every((item) => item[predicate] && Boolean(item[predicate]));
}

export {
  truthCheck,
};
