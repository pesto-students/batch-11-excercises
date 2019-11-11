
const mapFilterAndReduce = (person) => {
  const filterName = person.filter((i) => i.firstName.length < 5);
  const reducedfilterName = {};

  for (const item of filterName) {
    reducedfilterName[item.firstName] = item.firstName.length;
  }
  return reducedfilterName;
};

export {
  mapFilterAndReduce,
};
