import accountDataset from './dataset.json';

function hundredThousandairs() {
  const {
    bankBalances
  } = accountDataset;
  const result = bankBalances.filter((key) => parseInt(key['amount']) > 100000);
  return result;
}

function datasetWithRoundedDollar() {
  const {
    bankBalances
  } = accountDataset;
  const result = bankBalances.map((item) => {
    item['rounded'] = Math.round(parseInt(item['amount']))
    return item;
  })
  return result;
}

function sumOfBankBalances() {
  const {
    bankBalances
  } = accountDataset;
  let totalAmount = 0;
  bankBalances.map((item) => {
    totalAmount += (parseFloat(item['amount']));
    return item;
  })
  return parseFloat(totalAmount.toFixed(2));
}

function sumOfInterests() {
  const {
    bankBalances
  } = accountDataset;
  // Wisconsin, 
  // Illinois
  // Wyoming
  // Ohio
  // Georgia
  // Delaware
  const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GE', 'DL'];
  const filterAccount = (account) => selectedStates.includes(account.state);
  const filteredStates = bankBalances.filter(filterAccount);
  // let totalSumAmountOfFilteredStates = 0;
  filteredStates.map((account) => {
    const addInterest = parseFloat(account.amount) * 18.9;
    account.amount = addInterest;
     return account;
     })
  const totalSumInterest = filteredStates.reduce(( accumulator, currentValue ) => accumulator + currentValue.amount,
  0);
  // const totalSumInterest = totalSumAmountOfFilteredStates + (totalSumAmountOfFilteredStates * 18.9 / 100);
  return parseFloat(totalSumInterest.toFixed(2));
}

function higherStateSums() {
  const {
    bankBalances
  } = accountDataset;
  let totalHigherStateSum = 0;
  const sumAmountBystateObj = bankBalances.reduce((states, account) => {
    if (account.state in states) {
      states[account.state] += parseFloat(account.amount);
    } else {
      states[account.state] = parseFloat(account.amount);
    }
    return states;
  }, {});

  Object.keys(sumAmountBystateObj).forEach(state => {
    if (sumAmountBystateObj[state] > 1000000) {
      totalHigherStateSum += sumAmountBystateObj[state];
    }
  });

  return totalHigherStateSum;
}

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};