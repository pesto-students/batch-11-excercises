const binarySearch = (list, searchValue) => {
  let start = 0;
  let end = list.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start < end) {
    if (list[middle] === searchValue) {
      return middle;
    }
    if (list[middle] < searchValue) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    } else if (list[middle] > searchValue) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
  return -1;
};

export { binarySearch };
