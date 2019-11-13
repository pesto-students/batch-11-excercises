const checkForAllNumbers = (list1, list2) => {
  const isNumberList1 = list1.every((i) => typeof i === 'number');
  const isNumberList2 = list2.every((i) => typeof i === 'number');
  return isNumberList1 && isNumberList2;
};
const negativeZeroHandle = (value, list1) =>
  (value === 0 && 1 / value < 0) || list1.includes(-0);

const without = (list1, list2) => {
  if (!checkForAllNumbers(list1, list2)) {
    return [];
  }
  return list2.reduce((acc, val) => {
    if (!list1.includes(val) || negativeZeroHandle(val, list1)) {
      acc.push(val);
    }
    return acc;
  }, []);
};

// console.log(without([-0], [0]));

export { without };
