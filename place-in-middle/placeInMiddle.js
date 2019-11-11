function placeInMiddle(array1, array2) {
  return array1.slice(0, array1.length / 2)
    .concat(array2)
    .concat(array1.slice(array1.length / 2, array1.length));
}

export {
  placeInMiddle,
};
