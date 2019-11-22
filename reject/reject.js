
function reject(predicate, object) {
  const entries = Object.entries(object);
  const accumulator = entries.reduce((acc, entry) => {
    const [key, value] = [...entry];
    if (predicate(value) === false) {
      acc[key] = value;
    }
    return acc;
  }, {});

  if (Array.isArray(object)) {
    return Object.values(accumulator);
  }
  return accumulator;
}

export {
  reject,
};
