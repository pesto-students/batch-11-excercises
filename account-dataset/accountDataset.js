
import accountDataset from './dataset.json';
// function accountDataset(...args) {
//   return args;
// }

// export {
//   accountDataset,
// };
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
    totalAmount += Math.round(parseInt(item['amount'])).toFixed(2)
    return item;
  })
  return parseFloat(totalAmount.toFixed(2));
}

function sumOfInterests() {
  const { bankBalances } = accountDataset;
  const totalPrincipalAmount = bankBalances.reduce((currentSumTotal, bankBalance) => {
    const totalSum = currentSumTotal + parseInt(bankBalance.amount, 10);
    return totalSum;
  }, 0);
  const totalSumInterest = totalPrincipalAmount * 18.9;
  return totalSumInterest;
}

function higherStateSums() {
  // console.log(jsonData);
  const { bankBalances } = accountDataset;
  let totalHigherStateSum = 0;
  const totalSumStatewise = {};
  const result = bankBalances.map((item) => {
        totalSumStatewise[item] =item.amount;
      return item;
  });
  return result;
}

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
