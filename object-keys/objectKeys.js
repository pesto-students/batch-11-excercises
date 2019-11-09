function objectKeys(object) {
  const keys = [];

  for (let key in object) {
    keys.push(key.toString());
  }
  return keys;
}

export { objectKeys };
