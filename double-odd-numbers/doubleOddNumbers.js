const doubleOddNumbers = (collection) => {
  const oddCollection = collection.filter((i) => i % 2 !== 0);
  return oddCollection.map((i) => i * 2);
};

export { doubleOddNumbers };
