import { SavingsAccount } from './SavingsAccount';

describe('SavingsAccount', () => {
  test('SavingsAccount constructs the proper object', () => {
    const myAccount = {
      _accountNumber: '123456',
      _email: 'kohli@gmail.com',
      _firstName: 'Virat',
      _lastName: 'Kohli',
      products: [],
    };
    const actualAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(actualAccount).toEqual(myAccount);
  });

  test('should throw error if account number is not valid', () => {
    expect(() => new SavingsAccount('123wdt', 'kohli@gmail.com', 'Virat', 'Kohli')).toThrow('Account Number must be a number');
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123', 'kohli@gmail.com', 'Virat', 'Kohli')).toThrow('Account Number must be a 6-digit number');
  });

  test('should throw error if e-mail is invalid', () => {
    expect(() => new SavingsAccount('123456', 'kohli@', 'Virat', 'Kohli')).toThrow('Invalid e-mail');
  });

  test('should throw error if first name is not between 3 and 20 characters long', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'V', 'Kohli')).toThrow('First/Last name must be between 3 and 20 characters long');
  });

  test('should throw error if last name has other than english alphabets', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli5')).toThrow('First/Last name must contain english alphabets only');
  });

  test('should throw error if account number set as invalid number after initialisation', () => {
    var savingsAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(() => {savingsAccount.accountNumber = '123'}).toThrow('Account Number must be a 6-digit number');
  });

  test('should throw error if email set as invalid email after initialisation', () => {
    var savingsAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(() => {savingsAccount.email = '123'}).toThrow('Invalid e-mail');
  });

  test('should throw error if firstname is set as invalid name after initialisation', () => {
    var savingsAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(() => {savingsAccount.firstName = '1'}).toThrow('First/Last name must be between 3 and 20 characters long');
  });

  test('should throw error if lastname is set as invalid name after initialisation', () => {
    var savingsAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(() => {savingsAccount.lastName = '1'}).toThrow('First/Last name must be between 3 and 20 characters long');
  });

  test('SavingsAccount constructs the proper object after modifying object using setters', () => {
    const myAccount = {
      _accountNumber: '123456',
      _email: 'kmk@gmail.com',
      _firstName: 'Koushik',
      _lastName: 'Mohan',
      products: [],
    };
    const actualAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    actualAccount.email = 'kmk@gmail.com';
    actualAccount.firstName = 'Koushik';
    actualAccount.lastName = 'Mohan';
    expect(actualAccount).toEqual(myAccount);
  });


});
