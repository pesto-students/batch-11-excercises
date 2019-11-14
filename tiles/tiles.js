function tiles({
  small,
  big,
  target,
}) {
  const noOfBigTilesNeeded = Math.floor(target / 5);
  let noOfSmallTilesNeeded;
  if (noOfBigTilesNeeded > big) {
    noOfSmallTilesNeeded = target - (big * 5);
  }
  if (noOfBigTilesNeeded < big) {
    noOfSmallTilesNeeded = target - (noOfBigTilesNeeded * 5);
  }
  if (noOfSmallTilesNeeded <= small) {
    return true;
  }
  return false;
}

export {
  tiles,
};
