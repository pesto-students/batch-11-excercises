
const compare = (item1, item2, comparator) => {
  if (comparator) {
    return comparator(item1, item2);
  }
  if (item1 === item2) return 0;
  return item1 > item2 ? 1 : -1;
};

function binarySearch(items, toSearch, comparator, lowerBound = 0) {
  const midItemIdx = parseInt(items.length / 2, 10);
  const midItem = items[midItemIdx];
  if (items.length === 0) {
    return -1;
  }
  const comparison = compare(toSearch, midItem, comparator);
  if (comparison === 0) {
    return lowerBound + midItemIdx;
  }
  if (comparison > 0) {
    return binarySearch(items.slice(midItemIdx + 1), toSearch,
      comparator, lowerBound + midItemIdx + 1);
  }
  if (comparison < 0) {
    return binarySearch(items.slice(0, midItemIdx), toSearch, comparator, lowerBound);
  }
  return -1;
}

export {
  binarySearch,
};
