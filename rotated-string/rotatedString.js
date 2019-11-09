
function rotatedString(straight, rotated) {
  if (straight === rotated) return false;
  const rotatedFirstCharIndex = straight.indexOf(rotated[0]);
  const firstHalf = straight.substring(rotatedFirstCharIndex);
  const secondHalf = straight.substring(0, rotatedFirstCharIndex);
  const computedRotated = firstHalf + secondHalf;
  return computedRotated === rotated;
}

export {
  rotatedString,
};
