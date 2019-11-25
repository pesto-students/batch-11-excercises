function updateObjectFunction(index, number, actualArray) {
  const modifiedArray = [...actualArray];
  let idx = index;
  if (idx < 0) {
    idx += actualArray.length;
  }
  if (idx >= 0 && idx < actualArray.length) {
    modifiedArray[idx] = number;
  }

  return modifiedArray;
}

function curry(actualFunction) {
  return function curried(...args) {
    if (args.length >= actualFunction.length) {
      return actualFunction.apply(null, args);
    }
    return (...remainingArgs) =>
      curried.apply(null, args.concat(remainingArgs));
  };
}

const updateObject = curry(updateObjectFunction);

export { updateObject };
