
const omit = (properties, object) => {
  const objectWithoutProperties = { };
  for (let obj = object; obj !== null; obj = Object.getPrototypeOf(obj)) {
    for (const property of Object.keys(obj)) {
      if (!properties.includes(property)) {
        objectWithoutProperties[property] = object[property];
      }
    }
  }
  return objectWithoutProperties;
};

export {
  omit,
};
