const xprod = (list1, list2) => {
  if (list1.length === 0 || list2.length === 0) {
    return [];
  }
  const finalList = [];
  list1.forEach((i) => {
    list2.forEach((j) => {
      finalList.push([i, j]);
    });
  });
  return finalList;
};

export { xprod };
