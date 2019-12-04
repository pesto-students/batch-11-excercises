/* eslint-disable indent */
function steamrollArray(array) {
  return array.reduce(
    (flat, toFlatten) => flat.concat(
        Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten,
      ),
    [],
  );
}

export { steamrollArray };
