
function ackermann(data) {
  const { m, n } = data;
  if ((typeof m === 'number') && (typeof n === 'number')) {
    if ((m > -1) && (n > -1)) {
      if (m === 0) {
        return n + 1;
      }
      if ((m > 0) && (n === 0)) {
        return ackermann({ m: m - 1, n: 1 });
      }
      return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
    }
    throw Error('ackermann only works for non-negative numbers!');
  } else {
    throw TypeError('Invalid number received. Check if both the arguments are numbers!');
  }
}

export {
  ackermann,
};
