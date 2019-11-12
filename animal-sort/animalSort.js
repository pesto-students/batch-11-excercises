function animalSort(animals) {
  return animals.sort((firstEl, secondEl) => {
    if (firstEl.numberOfLegs > secondEl.numberOfLegs) {
      return 1;
    }
    if (firstEl.numberOfLegs < secondEl.numberOfLegs) {
      return -1;
    }
    if (firstEl.name > secondEl.name) {
      return 1;
    }
    if (firstEl.name < secondEl.name) {
      return -1;
    }
    return 0;
  });
}

export {
  animalSort,
};
