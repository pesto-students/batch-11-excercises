
function isIterable(collection) {
  if (typeof collection[Symbol.iterator] === 'function') {
    const iterator = collection[Symbol.iterator]();
    if (typeof iterator.next === 'function') {
      const obj = iterator.next();
      return 'value' in obj && 'done' in obj;
    }
    return false;
  }
  return false;
}

export {
  isIterable,
};
