
function instructor() {

  const instruct = {
    firstName: 'Aditya',
    sayHi() {
      this.firstName = 'Ram';
    },
  };
  return instruct;
}

export {
  instructor,
};
