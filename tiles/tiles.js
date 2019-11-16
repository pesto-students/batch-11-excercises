const tiles = ({ small, big, target }) => {
  const smallTileSize = 1;
  const bigTileSize = 5;
  if (small * smallTileSize + big * bigTileSize < target) {
    return false;
  }
  for (let i = 1; i <= big; i += 1) {
    for (let j = 1; j <= small; j += 1) {
      if (i * 5 + j === target) {
        return true;
      }
    }
  }
  return false;
};

export { tiles };
