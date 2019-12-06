function steamrollArray(flattenArray) {
  return flattenArray.reduce((flat, flatten) => flat.concat(
    Array.isArray(flatten) ? steamrollArray(flatten) : flatten,
  ),
  []);
}

export { steamrollArray };
