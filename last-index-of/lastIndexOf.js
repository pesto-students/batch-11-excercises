
function lastIndexOf(searchElement, array) {
  if (!Array.isArray(array)) throw new Error(`Invalid Value Provided As Second Argument.Expected Array, Received ${typeof Array}`);
  const lastIndex = array.length - 1;
  const reversedArray = array.slice().reverse();
  const elementFoundIn = reversedArray.indexOf(searchElement);
  return elementFoundIn === -1 ? elementFoundIn : lastIndex - elementFoundIn;
}

export {
  lastIndexOf,
};
