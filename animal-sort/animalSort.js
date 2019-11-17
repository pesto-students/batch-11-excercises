
function animalSort(animals) {
  const unSortedAnimals = [...animals];
  if (unSortedAnimals.length === 0) {
    return animals;
  } else {
    return unSortedAnimals.sort((animal1, animal2) => {
      if (animal1.numberOfLegs !== animal2.numberOfLegs) {
        return animal1.numberOfLegs - animal2.numberOfLegs;
      } else {
        return animal1.name > animal2.name;
      }
    });
  }
}

export {
  animalSort,
};
