
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    return this;
  }

  addDobDigits() {
    const addTwoDigits = (number1, number2) => Number(number1) + Number(number2);
    const numbers = this.dateOfBirth.split(/ /)[0].replace(/[^\d]/g, '').split('');
    const sumOfNumbers = numbers.reduce(addTwoDigits, 0);
    return sumOfNumbers;
  }
}

export {
  Person,
};
