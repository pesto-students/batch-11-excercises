
function instructor() {
  const instructorObject = {
    firstName: 'Yash',
    sayHi() {
      this.firstName = 'Ram';
    },
  };
  return instructorObject;
}

export {
  instructor,
};
