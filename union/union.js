
const isNegativeZero = (number) => Object.is(-0, number);

function union(firstSet, secondSet) {
  const combined = [...firstSet, ...secondSet];
  if (firstSet.some(isNegativeZero) || secondSet.some(isNegativeZero)) {
    return combined;
  }
  return [...new Set(combined)];
}

export {
  union,
};
