function steamrollArray(nestedArray) {
  let flattendArray = [];
  for (let i = 0; i < nestedArray.length; i += 1) {
    if (Array.isArray(nestedArray[i])) {
      flattendArray = flattendArray.concat(steamrollArray(nestedArray[i]));
    } else {
      flattendArray.push(nestedArray[i]);
    }
  }
  return flattendArray;
}

export { steamrollArray };
