/* eslint-disable guard-for-in */

function objectKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

export {
  objectKeys,
};
