const powerSet = (originalSet) => originalSet.reduce(
  (subsets, value) => subsets.concat(
    subsets.map((set) => [...set, value]),
  ),
  [
    [],
  ],
);

export {
  powerSet,
};
