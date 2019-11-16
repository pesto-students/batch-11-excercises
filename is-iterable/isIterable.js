
function isIterable(args) {
  const mayBeIterable = args;
  return typeof mayBeIterable[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
