function Instructor(name) {
  this.firstName = name;
}

Instructor.prototype.sayHi = function () {
  this.firstName = 'Ram';
};

const instructor = new Instructor('Test');

export {
  instructor,
};
