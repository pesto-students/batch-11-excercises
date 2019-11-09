function chunkArrayInGroups(array, chunkSize) {
  const chunkCollection = [];
  while (array.length !== 0) {
    const chunk = array.splice(0, chunkSize);
    chunkCollection.push(chunk);
  }
  return chunkCollection;
}

export { chunkArrayInGroups };
