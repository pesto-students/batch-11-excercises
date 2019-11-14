function theatre(bills) {
  const billsMap = {
    10: 0,
    20: 0,
    50: 0,
  };
  for (const bill of bills) {
    billsMap[bill] += 1;
    let remainingAmount = bill - 10;
    while (remainingAmount !== 0) {
      if (billsMap[20] !== 0 && remainingAmount >= 20) {
        billsMap[20] -= 1;
        remainingAmount -= 20;
      } else if (billsMap[10] !== 0) {
        billsMap[10] -= 1;
        remainingAmount -= 10;
      } else {
        return false;
      }
    }
  }
  return true;
}

export {
  theatre,
};
