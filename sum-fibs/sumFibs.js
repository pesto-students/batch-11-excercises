
function sumFibs(...args) {
  let i = 2;
  let sum = 0;

  const fibo = [];
  fibo.push(0);
  fibo.push(1);

  while (i <= args) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    i += 1;
  }

  fibo.forEach((ele) => {
    if (ele % 2 !== 0 && ele < args) sum += ele;
  });

  return sum;
}

export {
  sumFibs,
};
