const valuesIn = (object) => {
  const list = [];
  // eslint-disable-next-line
  for (const key in object) {
    list.push(object[key]);
  }

  return list.sort();
};

export { valuesIn };
