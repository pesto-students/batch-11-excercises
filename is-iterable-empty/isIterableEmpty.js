function isIterableEmpty(object) {
  return object[Symbol.iterator]().next().done === true;
}

export {
  isIterableEmpty,
};
