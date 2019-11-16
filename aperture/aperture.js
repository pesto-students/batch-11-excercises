function aperture(apertureLength, array) {
  const returnFirstN = (filterElement, filterIndex) => {
    if (filterIndex < apertureLength) {
      return true;
    }
    return false;
  };

  return array.reduce((acc, reduceElement, reduceIndex) => {
    const filterResult = array.slice(reduceIndex).filter(returnFirstN);

    if (filterResult.length === apertureLength) {
      acc.push(filterResult);
    }
    return acc;
  }, []);
}

export {
  aperture,
};
