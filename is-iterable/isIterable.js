
function isIterable(obj) {
  return obj[Symbol.iterator] instanceof Function;
}

export {
  isIterable,
};
