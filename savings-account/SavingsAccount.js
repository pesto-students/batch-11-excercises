
function SavingsAccount(accountInformation) {
  const [accountNumber, email, firstName, lastName, products] = accountInformation;
  this.accountNumber = accountNumber;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.products = products || [];
}

export {
  SavingsAccount,
};
