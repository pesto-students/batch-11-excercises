import accountDataset from './dataset.json';

// function accountDataset(...args) {
//   return args;
// }

function hundredThousandairs() {
  // console.log(jsonData);
}

function datasetWithRoundedDollar() {
  // console.log(jsonData);
}

function sumOfBankBalances() {
  // console.log(jsonData);
}

function sumOfInterests() {
  // console.log(jsonData);
  const { bankBalances } = accountDataset;
  const totalPrincipal = bankBalances.reduce((accumulator, bankBalance) => {
    const totalSum = accumulator + parseInt(bankBalance.amount, 10);
    return totalSum;
  }, 0);
  const totalInterest = totalPrincipal * 18.9;
  return totalInterest;
}

function higherStateSums() {
  // console.log(jsonData);
}

export {
  // accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
