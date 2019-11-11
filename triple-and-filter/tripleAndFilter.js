function tripleAndFilter(array) {
  const triplingValues = array.map(i => {
    return i * 3;
  });
  
  const filtered = triplingValues.filter(i => {
    return i % 5 === 0;
  });

  return filtered;
}

export { tripleAndFilter };
