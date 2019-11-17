function nestedListToArray(object) {
  const nestedArray = [];
  const values = Object.values(object);
  for (const value of values) {
    if (Array.isArray(value)) {
      nestedArray.push(value);
    }
  }
  return nestedArray;
}
const unnest = (nestedList) => {
  let nestedArrayList = [];
  if (!Array.isArray(nestedList)) {
    nestedArrayList = nestedListToArray(nestedList);
  } else {
    nestedArrayList = nestedList;
  }
  const unnestedList = [];
  nestedArrayList.forEach((i) => {
    if (Array.isArray(i)) {
      const [...temp] = i;
      unnestedList.push(...temp);
    } else {
      unnestedList.push(i);
    }
  });
  return unnestedList;
};

export { unnest };
