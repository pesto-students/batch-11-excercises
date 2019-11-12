
function animalSort(animals) {
  const compareByName = (animal1Name, animal2Name) => {
    let sorted = 0;
    let i = 0;
    while (sorted === 0 && i < Math.min(animal1Name.length, animal2Name.length)) {
      sorted = animal1Name[i].charCodeAt() - animal2Name[i].charCodeAt();
      i += 1;
    }
    return sorted;
  };

  const compareByLegs = (animal1, animal2) => {
    const difference = animal1.numberOfLegs - animal2.numberOfLegs;
    if (difference === 0) {
      return compareByName(animal1.name, animal2.name);
    }
    return difference;
  };
  return animals.sort(compareByLegs);
}

export {
  animalSort,
};
