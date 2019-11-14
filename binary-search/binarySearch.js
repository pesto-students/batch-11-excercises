
function search(array, left, right, target) {
  const mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    return mid;
  }
  if (target < array[mid]) {
    return search(array, left, mid - 1, target);
  }
  if (target > array[mid]) {
    return search(array, mid + 1, right, target);
  }
  return -1;
}

function binarySearch(array, target, comparator) {
  if (typeof array[0] === 'object') {
    const objects = [...array];
    objects.sort(comparator);
    const numbers = objects.map((object) => object.key);
    return search(numbers, 0, numbers.length, target.key);
  }
  return search(array, 0, array.length, target);
}

export {
  binarySearch,
};
