let functionCallCount = 0;

function counter() {
  functionCallCount += 1;
  return functionCallCount;
}

export {
  counter,
};
