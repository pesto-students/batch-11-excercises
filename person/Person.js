class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const date = new Date(this.dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const yearSum = year.toString().split('').map((n) => parseInt(n, 10)).reduce((a, b) => a + b, 0);

    return day + month + yearSum;
  }
}

export {
  Person,
};
