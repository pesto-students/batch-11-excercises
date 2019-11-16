function aperture(size, list) {
  if (size > list.length) {
    return [];
  }
  const tuplesList = [];
  for (let i = 0; i < list.length - size + 1; i += 1) {
    const tuples = list.slice(i, size + i);
    tuplesList.push(tuples);
  }
  return tuplesList;
}

export {
  aperture,
};
