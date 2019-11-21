function omit(listedKeys, object) {
  const result = {};
  for (const key in object) {
    if (listedKeys.indexOf(key) === -1) {
      result[key] = object[key];
    }
  }
  return result;
}

export {
  omit,
};
