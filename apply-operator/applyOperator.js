function calcSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function calcDiff(arr) {
  return -1 * calcSum(arr);
}

function calcProd(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i += 1) {
    prod *= arr[i];
  }
  return prod;
}

function calcDiv(arr) {
  const result = 1 / calcProd(arr);
  return parseFloat(result.toPrecision(2));
}

function calcMod(arr) {
  let mod = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    mod %= arr[i];
  }
  return mod;
}

function applyOperator(...args) {
  if (args.length === 0) {
    throw new Error();
  }
  if (args.length === 1) {
    return 0;
  }
  if (args.length === 2) {
    if (args[0] === '-') {
      return -1 * args[1];
    }
    return args[1];
  }
  if (args[0] === '+') {
    return calcSum(args.slice(1));
  }
  if (args[0] === '-') {
    return calcDiff(args.slice(1));
  }
  if (args[0] === '*') {
    return calcProd(args.slice(1));
  }
  if (args[0] === '/') {
    return calcDiv(args.slice(1));
  }
  if (args[0] === '%') {
    return calcMod(args.slice(1));
  }
  return args;
}

export {
  applyOperator,
};
