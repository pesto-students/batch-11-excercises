
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
}

Person.prototype.addDobDigits = function addDobDigits() {
  const sanitizedDobString = this.dateOfBirth.replace('/', '');
  const sumChars = (string) => [...string].reduce((sum, currentChar) => {
    const number = parseInt(currentChar, 10);
    if (!isNaN(number)) {
      sum += +number;
    }
    return sum;
  }, 0);

  return sumChars(sanitizedDobString);
};

export {
  Person,
};
