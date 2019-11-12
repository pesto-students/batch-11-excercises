function compareLegs(a, b) {
  const legsA = a.numberOfLegs;
  const legsB = b.numberOfLegs;

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  let comparison = 0;
  if (legsA > legsB) {
    comparison = 1;
  } else if (legsA < legsB) {
    comparison = -1;
  }

  if (legsA === legsB) {
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  }

  return comparison;
}

function animalSort(animalArray) {
  if (animalArray.length === 0) {
    return [];
  }
  return animalArray.sort(compareLegs);
}

export {
  animalSort,
};
