function values(object) {
  const array = [];
  for (const value of Object.values(object)) {
    array.push(value);
  }
  return array;
}

export {
  values,
};
