class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dob = this.dateOfBirth.split('/').join('');
    const dobDigits = dob.split('').map(Number);
    return dobDigits.reduce((total, digit) => total + digit, 0);
  }
}

export {
  Person,
};
