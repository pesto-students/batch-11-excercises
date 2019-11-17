
function xprod(list1, list2) {
  const makePairs = (list, item1) => {
    const addToList = item2 => list.push([item1, item2]);
    list2.forEach(addToList);
    return list;
  };
  const pairs = list1.reduce(makePairs, []);
  return pairs;
}

export {
  xprod,
};
