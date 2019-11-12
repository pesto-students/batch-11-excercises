
function isIterableEmpty(iterableLike) {
  const iterable = iterableLike[Symbol.iterator]();
  const valueObtained = iterable.next();
  return valueObtained.done;
}

export {
  isIterableEmpty,
};
