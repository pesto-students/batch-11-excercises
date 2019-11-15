function hammingDistance(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    throw new Error('Strings must be of the same length');
  }

  let distance = 0;

  for (let i = 0; i < stringA.length; i += 1) {
    if (stringA[i] !== stringB[i]) {
      distance += 1;
    }
  }
  return distance;
}

export {
  hammingDistance,
};
