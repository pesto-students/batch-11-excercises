
function objectKeys(object) {
  let keys = [];
  for (let [key, value] of Object.entries(object)) {
    keys.push(key);
  }
  return keys;
}

export {
  objectKeys,
};
