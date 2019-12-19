
function aperture(n, list) {
  let to = n;
  const tuples = [];
  list.forEach((number, from) => {
    const tuple = list.slice(from, to);
    to += 1;
    if (tuple.length === n) {
      tuples.push(tuple);
    }
  });
  return tuples;
}

export {
  aperture,
};
