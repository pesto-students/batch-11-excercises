
function dropElements(elements, filter) {
  return elements.reduce((changedArray, currentElement) => {
    if (filter(currentElement)) {
      changedArray.push(currentElement)
    }
    return changedArray;
  }, []);
}

export {
  dropElements,
};
