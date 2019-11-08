const { bankBalances } = require('./dataset.json');

function hundredThousandairs() {
  return bankBalances.filter((bankBalance) => Number(bankBalance.amount) > 100000);
}
function datasetWithRoundedDollar() {
  return bankBalances.map((bankBalance) => {
    // eslint-disable-next-line no-param-reassign
    bankBalance.rounded = Math.round(bankBalance.amount);
    return bankBalance;
  });
}
function sumOfBankBalances() {
  const summedUpBankBalance = bankBalances.reduce((alreadySummedUpBalances, currentAccount) => alreadySummedUpBalances + Number(currentAccount.amount),
    0);
  return Number(summedUpBankBalance.toFixed(2));
}

function higherStateSums() {
  const bankingStates = [...new Set(
    bankBalances.map((bankBalance) => bankBalance.state),
  )];
  const statesWithTotalBalance = bankingStates.map((singleState) => {
    const stateWithTotalBalance = {
      state: singleState,
      amount: 0,
    };
    bankBalances.map((bankBalance) => {
      if (bankBalance.state === singleState) {
        stateWithTotalBalance.amount += Number(Number(bankBalance.amount).toFixed(2));
      }
    });
    return stateWithTotalBalance;
  });
  const statesHoldingGreaterThan10L = statesWithTotalBalance.filter((stateWithTotalBalance) => stateWithTotalBalance.amount > 1000000);
  const sumOfAmountsLargerThan10L = statesHoldingGreaterThan10L.reduce((summedUpAmount, currentState) => summedUpAmount + Number(currentState.amount), 0);
  return sumOfAmountsLargerThan10L;
}
function sumOfInterests() {
  // Wisconsin, Illinois ,Wyoming, Ohio, Georgia, Delaware
  const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  // Calculate state wise total amount
  const filteredStateWiseBankBalances = selectedStates.map((selectedState) => bankBalances
    .filter((bankBalance) => bankBalance.state === selectedState));

  const statesWithTotalBankBalances = filteredStateWiseBankBalances
    .map((selectedState) => {
      const totalBankBalance = selectedState.reduce((alreadySummedUpValue, currentState) => alreadySummedUpValue + parseFloat(currentState.amount), 0);
      return { state: selectedState[0].state, amount: totalBankBalance, amountWithInterest: parseFloat(totalBankBalance * 0.189) };
    });

  const totalAmountWithAddedInterest = statesWithTotalBankBalances.reduce((alreadySummedUp, currentState) => (parseFloat(currentState.amountWithInterest)) + alreadySummedUp, 0);
  return Number(totalAmountWithAddedInterest.toFixed(2));
}
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  higherStateSums,
  sumOfInterests,
};
