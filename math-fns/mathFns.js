
function mathFns() {
  const sqrt = (num) => num ** 0.5;
  const power = (base, exp) => base ** exp;
  const round = (num) => Math.round(num);
  return { sqrt, power, round };
}

const { sqrt, power, round } = mathFns();

export {
  sqrt, power, round,
};
