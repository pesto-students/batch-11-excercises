
function uniq(array) {
  const arrayWithAllElement = [];
  const uniqElements = [];
  // eslint-disable-next-line array-callback-return
  array.map((element) => {
    if (Array.isArray(element)) {
      arrayWithAllElement.concat(element);
    } else {
      arrayWithAllElement.push(element);
    }
  });
  arrayWithAllElement.forEach((el) => {
    const indexOfExistingElement = uniqElements.indexOf(el);
    if (indexOfExistingElement === -1) {
      const elementFromUniqArray = uniqElements[indexOfExistingElement];
      if (typeof el === 'number' && (String(el).toString() !== String(elementFromUniqArray).toString())) {
        uniqElements.push(el);
      } else {
        uniqElements.push(el);
      }
    }
  });
  return uniqElements;
}

export {
  uniq,
};
