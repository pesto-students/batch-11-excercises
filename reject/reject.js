function reject(predicate, values) {
  if (Array.isArray(values) && values.length === 0) {
    return [];
  }
  const filteredValues = values.filter(value => !predicate(value));
  return filteredValues;
}

export { reject };
