function sundanFn({
  n,
  x,
  y,
}) {
  if (typeof n === 'number' && n === 0) {
    return x + y;
  }
  if (typeof y === 'number' && y === 0) {
    return x;
  }
  return sundanFn({
    n: n - 1,
    x: sundanFn({
      n,
      x,
      y: y - 1,
    }),
    y: sundanFn({
      n,
      x,
      y: y - 1,
    }) + y,
  });
}

export {
  sundanFn,
};
