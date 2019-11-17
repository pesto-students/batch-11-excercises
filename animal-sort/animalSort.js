
function animalSort(animals) {
  const sortByLegsOrName = (animal1, animal2) => {
    if (animal1.numberOfLegs > animal2.numberOfLegs) {
      return 1;
    } if (animal1.numberOfLegs < animal2.numberOfLegs) {
      return -1;
    }
    if (animal1.name > animal2.name) {
      return 1;
    }
    if (animal1.name < animal2.name) {
      return -1;
    }
    return 0;
  };
  return animals.sort(sortByLegsOrName);
}

export {
  animalSort,
};
