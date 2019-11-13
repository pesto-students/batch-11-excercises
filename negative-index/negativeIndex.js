
function negativeIndex(array) {
  if (!Array.isArray(array)) throw new TypeError(`Only Arrays are supported.Instead got ${typeof array}`);
  const handler = {
    get(targetArray, index) {
      if (Number(index) < 0) {
        const actualIndex = Number(index) + targetArray.length;
        return targetArray[actualIndex];
      }
      return targetArray[index];
    },
    set(targetArray, prop, value) {
      if (Number(prop) < 0) {
        const actualIndex = Number(prop) + targetArray.length;
        // eslint-disable-next-line no-param-reassign
        targetArray[actualIndex] = value;
        return true;
      }
      // eslint-disable-next-line no-param-reassign
      targetArray[prop] = value;
      return true;
    },
  };
  return new Proxy(array, handler);
}
export {
  negativeIndex,
};
