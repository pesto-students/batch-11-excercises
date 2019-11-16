
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dayMonthYear = this.dateOfBirth.split('/');
    const dateOfBirthDigits = dayMonthYear.reduce(this.toDigits, []);
    const sumOfDigits = dateOfBirthDigits.map(this.toDecimal).reduce(this.sum, 0);
    return sumOfDigits;
  }

  toDigits(acc, curr) {
    acc = acc.concat(curr.split(''));
    return acc;
  }

  sum(number1, number2) {
    number1 = number1 + number2;
    return number1;
  }

  toDecimal(argument) {
    return parseInt(argument);
  }

}

// console.log(new Person('Nishant', 'Salhotra', '5/11/1994').addDobDigits())
export {
  Person,
};
