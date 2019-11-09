
function truthCheck(collection, predicate) {
  for (const object of collection) {
    if (!object[predicate]) {
      return false;
    }
  }
  return true;
}

export {
  truthCheck,
};
