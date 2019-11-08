
function findElement(elements, filter) {
  for (let element of elements) {
    if (filter(element)) {
      return element;
    }
  }
}

export {
  findElement,
};
