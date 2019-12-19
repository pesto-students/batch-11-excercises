
function slice(startIndex, endIndex, list) {
  const isString = typeof list === 'string';
  const arr = isString ? list.split('') : list;
  return isString ? arr.slice(startIndex, endIndex).join('') : arr.slice(startIndex, endIndex);
}

export {
  slice,
};
