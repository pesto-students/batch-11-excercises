function primeFactorization(number) {
  let dividend = number;
  const factors = [];
  let divisor = 2;
  while (dividend > 1) {
    if (dividend % divisor === 0) {
      factors.push(divisor);
      dividend /= divisor;
    } else divisor += 1;
  }
  return factors;
}

function getCommon(factorFreqs) {
  const factorEntries = Object.entries(factorFreqs);
  let common = 1;
  for (const [factor, freq] of factorEntries) {
    common *= factor ** freq;
  }
  return common;
}

function getFactorFreqs(factors) {
  const factorFreqs = [];
  for (const factor of factors) {
    const times = {};
    for (const number of factor) {
      if (number in times) {
        times[number] += 1;
      } else times[number] = 1;
    }
    factorFreqs.push(times);
  }
  return factorFreqs;
}

function getMaxFreqs(factorFreqs) {
  const maxFreqs = {};
  factorFreqs.forEach((factor) => {
    for (const [number, freq] of Object.entries(factor)) {
      if (number in maxFreqs) {
        if (freq > maxFreqs[number]) {
          maxFreqs[number] = freq;
        }
      } else {
        maxFreqs[number] = freq;
      }
    }
  });
  return maxFreqs;
}

function smallestCommons(rangeArray) {
  const [lowerBound, upperBound] = rangeArray.sort((a, b) => a - b);
  const factors = [];
  let i = lowerBound;
  while (i <= upperBound) {
    const primeFactors = primeFactorization(i);
    factors.push(primeFactors);
    i += 1;
  }
  const factorFreqs = getFactorFreqs(factors);
  const maxFreqs = getMaxFreqs(factorFreqs);
  return getCommon(maxFreqs);
}

export {
  smallestCommons,
};
