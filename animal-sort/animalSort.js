function legsComparer(a, b) {
  const legA = a.numberOfLegs;
  const legB = b.numberOfLegs;
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  let comparison = 0;
  if (legA > legB) {
    comparison = 1;
  } else if (legA < legB) {
    comparison = -1;
  }
  if (legA === legB) {
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  }
  return comparison;
}

function animalSort(animalsArray) {
  if (animalsArray.length < 1) {
    return animalsArray;
  }
  return animalsArray.sort(legsComparer);
}

export {
  animalSort,
};
