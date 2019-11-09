function threeSum(array, target) {
  let triplet = [];
  if (array.length < 3 || typeof target !== "number") {
    throw new Error("Invalid Inputs");
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let z = j + 1; z < array.length; z++) {
        if (array[i] + array[j] + array[z] === target) {
          triplet = triplet.concat([array[i], array[j], array[z]]);
          return triplet;
        }
      }
    }
  }
  if (triplet.length === 0) {
    return null;
  }
}

export { threeSum };
