const isObject = (element) => element && element.constructor.name === 'Object';
function reject(transducerFn, collection) {
  const inducedArray = [];
  if (!Array.isArray(collection) && !isObject(collection)) return inducedArray;
  // eslint-disable-next-line guard-for-in
  for (const collectionKey in collection) {
    const selectedElement = collection[collectionKey];
    if (!transducerFn.call(this, selectedElement)) {
      inducedArray.push(selectedElement);
    }
  }
  return inducedArray;
}

export {
  reject,
};
