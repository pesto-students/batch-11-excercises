import { type } from "os";

function negativeIndex(numberArray) {
  if (!Array.isArray(numberArray)) {
    throw new TypeError('Only Arrays are supported');
  }
  const handler = {
    get: (target, index) => {
      // eslint-disable-next-line no-param-reassign
      if (typeof index === 'symbol') {
        return Reflect.get(target, index);
      }
      if(isNaN(index)) {
        return Reflect.get(target, index);
      }
      index = parseInt(index, 10);
      if (index < 0) {
        // eslint-disable-next-line no-param-reassign
        index += target.length;
        return target[index];
      }
      return target[index];
    },
    set: (target, index, value) => {

      if (typeof index === 'symbol') {
        return Reflect.get(target, index, value);
      }
      if(isNaN(index)) {
        return Reflect.get(target, index, value);
      }
      // eslint-disable-next-line no-param-reassign
      index = parseInt(index, 10);
      // eslint-disable-next-line no-param-reassign
      if (index < 0) {
        // eslint-disable-next-line no-param-reassign
        index += target.length;
        target[index] = value;
        return target;
      }
      // eslint-disable-next-line no-param-reassign
      target[index] = value;
      return target;
    },
  };
  return new Proxy(numberArray, handler);
}

export {
  negativeIndex,
};
