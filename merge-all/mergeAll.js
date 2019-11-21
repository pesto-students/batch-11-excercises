const mergeAll = (listOfObjects) => {
  const merged = listOfObjects.reduce((acc, val) => {
    const keys = Object.keys(val);
    for (const key of keys) {
      acc[key] = val[key];
    }

    return acc;
  }, {});

  return merged;
};

export { mergeAll };
