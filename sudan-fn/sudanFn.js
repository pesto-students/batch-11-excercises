function sundanFn(object) {
  const {
    n,
    x,
    y,
  } = object;
  if (n === 0 && y !== 0) {
    return x + y;
  }
  if (y === 0 && n >= 0) {
    return x;
  }
  if (y > 0 && n >= 0) {
    return sundanFn(n - 1, sundanFn(n, x, y - 1), sundanFn(n, x, y - 1) + y);
  }
  return -1;
}

export {
  sundanFn,
};
