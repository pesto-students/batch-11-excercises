function squareNumbersArray(numberArray) {
  const squaredArray = numberArray.map(element => {
    if (typeof element !== "number") {
      throw new Error("My custom error");
    } else {
      return element ** 2;
    }
  });
  return squaredArray;
}

export { squareNumbersArray };
