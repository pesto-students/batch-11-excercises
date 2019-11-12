const isIterable = (argument) => argument !== null && typeof argument[Symbol.iterator] === 'function';

export {
  isIterable,
};
