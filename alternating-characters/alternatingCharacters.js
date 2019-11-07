function alternatingCharacters(words) {
  let deleteCount = [];
  let counter = 0;

  for (let each of words) {
    for (let i = 0; i < each.length; i++) {
      if (each[i] === each[i + 1]) {
        counter++;
      }
    }

    deleteCount.push(counter);
    counter = 0;
  }
  return deleteCount;
}

export { alternatingCharacters };
