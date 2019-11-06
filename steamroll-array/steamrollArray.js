function steamrollArray(nestedArray) {
  let flattenArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    let item = nestedArray[i];
    let isArray = Array.isArray(item);

    if (isArray) {
      flattenArray = flattenArray.concat(steamrollArray(item));
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
}

export { steamrollArray };
