const aperture = (composeLength, list) => {
  if (composeLength > list.length) {
    const emptyList = [];
    return emptyList;
  }
  const compsedList = [];
  for (let i = 0; i < list.length - composeLength + 1; i += 1) {
    const compose = list.slice(i, composeLength + i);
    compsedList.push(compose);
  }
  return compsedList;
};

export { aperture };
