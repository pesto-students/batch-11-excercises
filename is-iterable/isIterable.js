
const isIterable = (maybeIterable) => typeof maybeIterable[Symbol.iterator] === 'function';

export {
  isIterable,
};
