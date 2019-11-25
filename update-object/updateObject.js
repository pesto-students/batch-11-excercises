const modifier = (index, value, list) => {
  let positiveIndex = index;
  if (index < 0) {
    positiveIndex = list.length + index;
  }
  if (positiveIndex > list.length - 1 || positiveIndex < 0) {
    return list;
  }
  const updatedList = [...list];
  updatedList[positiveIndex] = value;
  return updatedList;
};

const curry = (main) => {
  const store = [];
  return function nextCall(...args) {
    store.push(...args);
    if (args.length >= main.length) {
      return main(...args);
    }
    return (...next) => nextCall(...args, ...next);
  };
};

const updateObject = curry(modifier);
// console.log(updateObject(-5, 4, [0, 1, 2, 3]));
export { updateObject };
