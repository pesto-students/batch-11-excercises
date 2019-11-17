const tiles = ({ small, big, target }) => {
  const maximumNoOfBigTiles = Math.floor(target / 5);
  let noOfSmallTiles = 0;
  if (maximumNoOfBigTiles > big) {
    noOfSmallTiles = target - big * 5;
  }
  if (maximumNoOfBigTiles < big) {
    noOfSmallTiles = target - maximumNoOfBigTiles * 5;
  }
  if (noOfSmallTiles > small) {
    return false;
  }

  return true;
};

export { tiles };
