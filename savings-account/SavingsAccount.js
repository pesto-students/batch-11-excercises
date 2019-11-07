/* eslint-disable no-useless-escape */
/* eslint-disable arrow-body-style */

function SavingsAccount(...accountInformation) {
  const [accountNumber, email, firstName, lastName, products] = accountInformation;

  this.information = {
    accountNumber,
    email,
    firstName,
    lastName,
    products: products || [],
  };

  if (this.isInformationValid(this.information)) {
    return this.information;
  }
}

SavingsAccount.prototype.isInformationValid = (...accountInformation) => {
  const [accountNumber, email, firstName, lastName] = accountInformation;
  if (!this.isValidAccountNumber(accountNumber)) {
    throw new Error('Account Number must be a 6-digit number');
  }
  if (!this.isValidEmail(email)) {
    throw new Error('Invalid e-mail');
  }
  if (!this.isValidFirstName(firstName)) {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if (!this.isValidLastName(lastName)) {
    throw new Error('Last name must contain english alphabets only');
  }
  return true;
};

SavingsAccount.prototype.isValidAccountNumber = (accountNumber) => {
  return accountNumber.length !== 6;
};

SavingsAccount.prototype.isValidEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(emailPattern);
};

SavingsAccount.prototype.isValidFirstName = (firstName) => {
  return firstName.length >= 3 && firstName.length <= 20;
};

SavingsAccount.prototype.isValidLastName = (lastName) => {
  const digitPattern = /\d/;
  return !lastName.match(digitPattern);
};

SavingsAccount.prototype.getAccountNumber = () => {
  return this.accountNumber;
};

SavingsAccount.prototype.setAccountNumber = (accountNumber) => {
  this.accountNumber = accountNumber;
  return this;
};

SavingsAccount.prototype.getEmail = () => {
  return this.email;
};

SavingsAccount.prototype.setEmail = (email) => {
  this.email = email;
  return this;
};

SavingsAccount.prototype.getFirstName = () => {
  return this.firstName;
};

SavingsAccount.prototype.setFirstName = (firstName) => {
  this.firstName = firstName;
  return this;
};

SavingsAccount.prototype.getLastName = () => {
  return this.lastName;
};

SavingsAccount.prototype.setLastName = (lastName) => {
  this.lastName = lastName;
  return this;
};

SavingsAccount.prototype.getProducts = () => {
  return this.products;
};

SavingsAccount.prototype.setProducts = (products) => {
  this.products = products;
  return this;
};

export {
  SavingsAccount,
};
