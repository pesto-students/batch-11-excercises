class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const isNumber = (element) => parseInt(element, 10);
    const sum = (acc, el) => acc + el;
    return this.dateOfBirth.split('').filter(isNumber)
      .map(isNumber)
      .reduce(sum);
  }
}

export {
  Person,
};
