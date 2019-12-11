function sumAll(arrayOfNumber) {
  let [startingNumber, endingNumber] = arrayOfNumber;
  let differnceOfNumber = Math.abs(startingNumber - endingNumber);
  let minimumNumber = Math.min(startingNumber, endingNumber);
  let sum = minimumNumber;
  for (let i = 1; i <= differnceOfNumber; i++) {
    let nextNumber = minimumNumber + i;
    sum = sum + nextNumber;
  }
  return sum;
}

export { sumAll };
