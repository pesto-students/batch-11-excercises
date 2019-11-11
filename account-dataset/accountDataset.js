import dataset from './dataset';
const { bankBalances } = dataset;

function hundredThousandairs() {
  return bankBalances.filter((balance) => {
    if (balance.amount > 100000) {
      return balance;
    }
  });
}

function accountDataset(...args) {
  return args;
}

function datasetWithRoundedDollar() {
  const roundedDollarDataset = bankBalances.map((bankBalance) => {
    bankBalance.rounded = Math.round(parseFloat(bankBalance.amount));
    return bankBalance;
  });
  return roundedDollarDataset;
}

function sumOfBankBalances() {
  let sum = 0;
  bankBalances.forEach((balance) => {
    const amount = parseFloat(balance.amount);
    sum += amount;
  });
  return parseFloat(sum.toFixed(2));
}

function sumOfInterests() {
  let sum = 0;
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  bankBalances.forEach((balance) => {
    if (states.includes(balance.state)) {
      const amount = parseFloat(balance.amount);
      sum += amount;
    }
  });
  return parseFloat((sum * 18.9 / 100).toFixed(2));
}

function getTotalStateAmount(accounts) {
  const stateTotalAmounts = {};
  let amount = 0;
  accounts.forEach((balance) => {
    amount = parseFloat(balance.amount);
    if (balance.state in stateTotalAmounts) {
      stateTotalAmounts[balance.state] += amount;
    } else {
      stateTotalAmounts[balance.state] = amount;
    }
  });
  return stateTotalAmounts;
}

function higherStateSums() {
  let sum = 0;
  const stateTotalAmounts = getTotalStateAmount(bankBalances);
  for (const stateAmount of Object.values(stateTotalAmounts)) {
    if (stateAmount > 1000000) sum += stateAmount;
  }
  return parseFloat(sum.toFixed(2));
}


export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
