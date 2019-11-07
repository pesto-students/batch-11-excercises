
const bankBalanceObject = require('./dataset.json').bankBalances;

function hundredThousandairs() {
  return bankBalanceObject.filter((account) => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  const addRoundedAmount = (account) => (
    {
      ...account,
      rounded: Math.round(account.amount),
    });

  return bankBalanceObject.map(addRoundedAmount);
}

function sumOfBankBalances() {
  const addAmountOfAllAcounts = (total, account) => total + parseFloat(account.amount);
  const sumHighPrecision = bankBalanceObject.reduce(addAmountOfAllAcounts, 0);
  return Number(sumHighPrecision.toFixed(2));
}

function sumOfInterests() {
  // ['Wisconsin', 'Illinois', 'Wyoming', 'Ohio', 'Georgia', 'Delaware'];
  const citiesToCalculateInterest = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const predicate = (account) => citiesToCalculateInterest.includes(account.state);
  const calculateInterest = (account) => {
    const { amount } = account;
    const parsedAmount = parseFloat(amount);
    return Number((parsedAmount * 0.189).toFixed(2));
  };
  const addAllInterest = (total, interest) => total + interest;
  const filteredCities = bankBalanceObject.filter(predicate);
  const interestOfFilteredCities = filteredCities.map(calculateInterest);
  const sumTotalInterest = interestOfFilteredCities.reduce(addAllInterest, 0);
  const formattedSumTotalInterest = Number(sumTotalInterest.toFixed(2));

  return formattedSumTotalInterest;
}

function higherStateSums() {
  const hashedTotals = bankBalanceObject.reduce((stateNames, account) => {
    if (account.state in stateNames) {
      // eslint-disable-next-line no-param-reassign
      stateNames[account.state] += Number(account.amount);
    } else {
      // eslint-disable-next-line no-param-reassign
      stateNames[account.state] = Number(account.amount);
    }
    return stateNames;
  }, {});

  let total = 0;

  for (const state in hashedTotals) {
    if (hashedTotals[state] > 1000000) total += hashedTotals[state];
  }

  return total;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
