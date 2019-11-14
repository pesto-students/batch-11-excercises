
function toPairs(inputObj) {
  return Object.keys(inputObj).map((key) => [key, inputObj[key]]);
}

export {
  toPairs,
};
