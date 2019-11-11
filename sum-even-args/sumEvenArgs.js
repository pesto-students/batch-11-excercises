function sumEvenArgs(...array) {
  const evenValues = array.filter((i) => i % 2 === 0);
  let sum = 0;
  for (const value of evenValues) {
    sum += value;
  }
  return sum;
}


export { sumEvenArgs };
