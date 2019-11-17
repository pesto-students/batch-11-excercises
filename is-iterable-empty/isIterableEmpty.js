const isIterableEmpty = (iterable) => {
  if (iterable[Symbol.iterator]().next().value === undefined) {
    return true;
  }
  return false;
};

export { isIterableEmpty };
