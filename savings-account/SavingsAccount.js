
const ACCOUNT_NUMBER_LENGTH = 6;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 20;
const NAME_REGEX = /^[a-zA-Z]+$/;
const ACCOUNT_NUMBER_REGEX = /^[0-9]+$/;


class SavingsAccount {

  constructor(accountNumber, email, firstName, lastName) {
    this._accountNumber = validateAccountNumber(accountNumber) ? accountNumber : undefined;
    this._email = validateEmail(email) ? email : undefined;
    this._firstName = validateName(firstName) ? firstName : undefined;
    this._lastName = validateName(lastName) ? lastName : undefined;
    this.products = [];
  }

  set accountNumber(accountNumber) {
    if (validateAccountNumber(accountNumber)) {
      this._accountNumber = accountNumber;
    }
  }

  get accountNumber() {
    return this._accountNumber;
  }

  set email(email) {
    if (validateEmail(email)) {
      this._email = email;
    }
  }

  get email() {
    return this._email;
  }

  set firstName(firstName) {
    if (validateName(firstName)) {
      this._firstName = firstName;
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    if (validateName(lastName)) {
      this._lastName = lastName;
    }
  }

  get lastName() {
    return this._lastName;
  }

}

function validateAccountNumber(accountNumber) {
  if (!ACCOUNT_NUMBER_REGEX.test(accountNumber)) {
    throw new Error("Account Number must be a number")
  }
  if (accountNumber.length !== ACCOUNT_NUMBER_LENGTH) {
    throw new Error("Account Number must be a 6-digit number");
  }
  return true;
}

function validateEmail(email) {
  if (!EMAIL_REGEX.test(email)) {
    throw new Error("Invalid e-mail");
  }

  return true;
}

function validateName(name) {
  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    throw new Error("First/Last name must be between 3 and 20 characters long")
  }
  if (!NAME_REGEX.test(name)) {
    throw new Error("First/Last name must contain english alphabets only")
  }
  return true;
}

export {
  SavingsAccount,
};
