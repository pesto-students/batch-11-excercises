const isIterable = (value) => typeof value[Symbol.iterator] === 'function';

export { isIterable };
