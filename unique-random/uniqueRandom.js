function uniqueRandom(min, max) {
  let previous;
  const uniqueRandomGenerator = () => {
    const current = Math.floor(Math.random() * (max - min)) + min;
    previous = current === previous ? uniqueRandomGenerator() : current;
    return previous;
  };

  return uniqueRandomGenerator;
}


export {
  uniqueRandom,
};
