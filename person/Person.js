class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dob = this.dateOfBirth.split('/').join('');
    const dobDigits = dob.split('').map(Number);
    const sumOfDigits = (total, digit) => total + digit;
    return dobDigits.reduce(sumOfDigits, 0);
  }
}

export {
  Person,
};
