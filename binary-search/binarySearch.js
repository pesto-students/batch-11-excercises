/* eslint-disable no-console */

function binarySearchAlgo(array, left, right, target) {
  const mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    return mid;
  }
  if (left === array.length || right === 0) {
    return -1;
  }
  if (target > array[mid]) {
    return binarySearchAlgo(array, mid + 1, right, target);
  }
  return binarySearchAlgo(array, left, mid - 1, target);
}

function binarySearch(object, target, comparator) {
  if (object.length === undefined) {
    object.sort(comparator);
    const numbers = [];
    Object.keys(object).forEach((key) => {
      numbers.push(key);
    });
    numbers.sort();
    return binarySearchAlgo(numbers, 0, numbers.length, target.key);
  }
  return binarySearchAlgo(object, 0, object.length, target);
}

export {
  binarySearch,
};
