
function sudanFn({ n, x, y }) {
  if (n === 0 || y === 0) {
    return x + y;
  }

  // eslint-disable-next-line max-len
  return sudanFn({ n: (n - 1), x: sudanFn({ n, x, y: y - 1 }), y: sudanFn({ n, x, y: y - 1 }) + y });
}

export {
  sudanFn,
};
