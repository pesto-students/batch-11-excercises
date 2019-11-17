
function aperture(apertureLength, inputArray) {
  const resultArray = inputArray.reduce((acc, element, index) => {
    if (inputArray.length - index + 1 > apertureLength) {
      acc.push(inputArray.slice(index, index + apertureLength));
    }
    return acc;
  }, []);

  return resultArray;
}

export {
  aperture,
};
