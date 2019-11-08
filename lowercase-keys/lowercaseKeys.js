function lowercaseKeys(object) {
  const updatedObject = {};
  const keys = Object.keys(object);

  for (let item of keys) {
    const lowercaseKey = item.toLowerCase();
    updatedObject[lowercaseKey] = object[item];
  }

  return updatedObject;
}

export { lowercaseKeys };
