
function toPairs(object) {
  const keysOfObject = Object.keys(object);
  const pair = keysOfObject.map((key) => [key, object[key]]);
  return pair;
}

export {
  toPairs,
};
