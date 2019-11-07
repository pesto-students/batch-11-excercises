function threeSum(arr, target) {
  const result = [];
  const len = arr.length;
  if (len < 3 || typeof target !== 'number') {
    throw new Error();
  }
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      for (let k = j + 1; k < len; k += 1) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result.push(arr[i]);
          result.push(arr[j]);
          result.push(arr[k]);
          return result;
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
