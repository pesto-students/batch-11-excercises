function reject(predicate, values) {
  if (!Array.isArray(values) || values.length === 0) {
    return [];
  }
  const predicateFilter = values.filter(predicate);
  const filteredValues = values.filter(
    value => !predicateFilter.includes(value)
  );
  return filteredValues;
}

export { reject };
