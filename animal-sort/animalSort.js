const comparator = (animal1, animal2) => {
  if (animal1.numberOfLegs === animal2.numberOfLegs) {
    return animal1.name > animal2.name;
  }
  return animal1.numberOfLegs - animal2.numberOfLegs;
};
const animalSort = (animalList) => {
  if (animalList.length === 0) {
    const emptyList = [];
    return emptyList;
  }
  const sortedAnimal = animalList.sort(comparator);

  return sortedAnimal;
};

export { animalSort };
