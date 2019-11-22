function diffArray(arrayA, arrayB) {
  return arrayA
    .concat(arrayB)
    .filter((item) => !arrayA.includes(item) || !arrayB.includes(item));
}

export {
  diffArray,
};
