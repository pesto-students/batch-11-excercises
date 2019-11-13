
function aperture(apertureLength, inputArray) {
  const resultArray = inputArray.reduce((acc, element) => {
    const index = inputArray.indexOf(element);
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
