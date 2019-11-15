
function* chunk(iterable, n) {
  for (let i = 0; i < iterable.length; i += n) {
    yield iterable.slice(i, i + n);
  }
}

const split = (size, iterable) => [...chunk(iterable, size)];

function splitEvery(size, iterable) {
  if (size <= 0) {
    throw new Error(
      `Received invalid size: ${size}. Please enter a positive integer.`,
    );
  }
  return split(size, iterable);
}

export { splitEvery };
