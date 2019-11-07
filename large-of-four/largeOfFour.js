
function largeOfFour(collectionOfQuintupletArrays) {
  const largestElementOfFour = (largest, element) => {
    const larger = element > largest ? element : largest;
    return larger;
  };

  const filterLargestElementsOfArray = (arrayOfLargestElements, currentArray) => {
    arrayOfLargestElements.push(currentArray.reduce(largestElementOfFour, -Infinity));
    return arrayOfLargestElements;
  };

  return collectionOfQuintupletArrays.reduce(filterLargestElementsOfArray, []);
}

export {
  largeOfFour,
};
