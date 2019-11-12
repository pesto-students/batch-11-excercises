
function animalSort(animals) {
  const animalComparator = ((value1, value2) => {
    if (value1.numberOfLegs === value2.numberOfLegs) {
      return value1.name > value2.name;
    }
    return value1.numberOfLegs > value2.numberOfLegs;
  });
  return animals.sort(animalComparator);
}

export {
  animalSort,
};
