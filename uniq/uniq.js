const negativeZeroHandler = (acc, x) => {
  for (const zero of acc) {
    if (1 / zero === -Infinity && 1 / x === Infinity) {
      return true;
    }
    if (1 / zero === Infinity && 1 / x === -Infinity) {
      return true;
    }
  }
  return false;
};
const flattening = (list) => {
  let flat = [];
  for (let i = 0; i < list.length; i += 1) {
    if (Array.isArray(list[i])) {
      flat = flat.concat(flattening(list[i]));
    } else {
      flat.push(list[i]);
    }
  }
  return flat;
};
const uniq = (list) => {
  const flattenedList = flattening(list);
  const uniqeValues = flattenedList.reduce((acc, val) => {
    if (!acc.includes(val) || negativeZeroHandler(acc, val)) {
      acc.push(val);
    }
    return acc;
  }, []);
  return uniqeValues;
};

export { uniq };
