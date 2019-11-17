function sumEvenArgs(...numbers) {
  const isEven = numbers.filter((number) => number % 2 === 0);
  const sumOfEvenNumbers = isEven.reduce((accumulator, current) => accumulator + current, 0);
  return sumOfEvenNumbers;
}

export {
  sumEvenArgs,
};
