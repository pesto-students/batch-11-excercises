function doubleOddNumbers(array) {
  return array.filter((element) => element % 2 !== 0)
    .map((element) => element * 2);
}

export {
  doubleOddNumbers,
};
