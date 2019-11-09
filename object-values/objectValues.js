function objectValues(object) {
  const values = [];

  for (let key in object) {
    let value = object[key];
    values.push(value);
  }
  return values;
}

export { objectValues };
