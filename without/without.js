// Not able to use completely functional array methods
// Used a normal for loop instead of doing "stringify" to compare
function arraysEqual(first, second) {
  if (first instanceof Array && second instanceof Array) {
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i += 1) {
      if (!arraysEqual(first[i], second[i])) {
        return false;
      }
    }
    return true;
  }
  return first === second;
}
const isNegativeZero = (element) => Object.is(-0, element);
const includes = (array, searchElement) => {
  if (array.some(isNegativeZero) || isNegativeZero(searchElement)) {
    return true;
  }
  if (Array.isArray(searchElement)) {
    for (const element of array) {
      return !arraysEqual(element, searchElement);
    }
  }
  return !array.includes(searchElement);
};
const remover = (array) => (element) => includes(array, element);
const curriedWithout = (what) => (where) => where.filter(remover(what));

const without = (toRemove, removeFromArray) => curriedWithout(toRemove)(removeFromArray);

export {
  without,
};
