const theatre = (list) => {
  const currencyCount = {
    10: 0,
    20: 0,
    50: 0,
  };

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === 10) {
      currencyCount[10] += 1;
    }
    if (list[i] === 20) {
      currencyCount[20] += 1;
      if (currencyCount[10] >= 1) {
        currencyCount[10] -= 1;
      } else {
        return false;
      }
    }
    if (list[i] === 50) {
      currencyCount[50] += 1;
      if (currencyCount[20] >= 2) {
        currencyCount[20] -= 2;
      } else if (currencyCount[20] === 1 && currencyCount[10] >= 2) {
        currencyCount[20] -= 1;
        currencyCount[10] -= 2;
      } else if (currencyCount[20] === 0 && currencyCount[10] >= 4) {
        currencyCount[10] -= 4;
      } else {
        return false;
      }
    }
  }
  return true;
};

export { theatre };
