function theatre(theatreQueue) {
  let tens = 0; let twenties = 0; let fifties = 0;
  for (const ele of theatreQueue) {
    if (ele === 10) {
      tens += 1;
    } else if (ele === 20) {
      if (tens >= 1) {
        twenties += 1;
        tens -= 1;
      } else {
        return false;
      }
    } else {
      if (twenties >= 2) {
        twenties -= 2;
        fifties += 1;
      } else if (twenties === 1 && tens >= 2) {
        fifties += 1;
        tens -= 2;
        twenties -= 1;
      } else if (tens >= 4) {
        fifties += 1;
        tens -= 4;
      } else {
        return false;
      }
    }
  }
  return true;
}

export {
  theatre,
};
