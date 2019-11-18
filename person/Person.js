
const parseDecimalInt = (digit) => parseInt(digit, 10);

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.split('').reduce((acc, digit) => {
      const num = parseDecimalInt(digit);
      const isValidNum = Boolean(num);
      return isValidNum ? acc + num : acc;
    }, 0);
  }
}

export {
  Person,
};
