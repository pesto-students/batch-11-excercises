const values = (object) => {
  const propertyName = Object.keys(object);
  return propertyName
    .reduce((acc, val) => {
      const isEnumerable = Object.getOwnPropertyDescriptor(object, val);
      if (isEnumerable) {
        acc.push(object[val]);
      }
      return acc;
    }, [])
    .sort();
};

export { values };
