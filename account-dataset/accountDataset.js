
import accountDataset from './dataset.json';
function hundredThousandairs() {
  const { bankBalances } = accountDataset;
  const result = bankBalances.filter((key) => parseInt(key['amount']) > 100000);
  return result;
}

function datasetWithRoundedDollar() {
  const { bankBalances } = accountDataset;
  const result = bankBalances.map((item) => {
    item['rounded'] = Math.round(parseInt(item['amount']))
    return item;
  })
  return result;
}

function sumOfBankBalances() {
  const { bankBalances } = accountDataset;
  let totalAmount = 0;
  bankBalances.map((item) => {
    totalAmount += (parseFloat(item['amount']));
    return item;
  })
  return parseFloat(totalAmount.toFixed(2));
}

function sumOfInterests() {
  const { bankBalances } = accountDataset;
  const totalPrincipalAmount = sumOfBankBalances();
  const totalSumInterest = totalPrincipalAmount * 18.9;
  return totalSumInterest;
}

function higherStateSums() {
  const { bankBalances } = accountDataset;
  let totalHigherStateSum = 0;
  const sumAmountBystateObj  = bankBalances.reduce((states, account) => {
    if (account.state in states) {
      states[account.state] += parseFloat(account.amount);
    } else {
      states[account.state] = parseFloat(account.amount);
    }
    return states;
  }, {});

  Object.keys(sumAmountBystateObj).forEach(state=>{   
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
