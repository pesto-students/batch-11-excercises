/* eslint-disable prefer-spread */

function updateObjectFunction(index, number, actualArray) {
  const modifiedArray = [...actualArray];
  if (index < 0) {
    // eslint-disable-next-line no-param-reassign
    index += actualArray.length;
  }
  if (index >= 0 && index < actualArray.length) {
    modifiedArray[index] = number;
  }

  return modifiedArray;
}

function curry(actualFunction) {
  return function curried(...args) {
    if (args.length >= actualFunction.length) {
      return actualFunction.apply(null, args);
    }
    return (...lessArgs) => curried.apply(null, args.concat(lessArgs));
  };
}

const updateObject = curry(updateObjectFunction);

export {
  updateObject,
};
