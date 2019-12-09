
// (*)
// Follow the instructions and fill in the blank sections.
function User(userName, password) {
  // set a username and password property on the user object that is created
  this.username = userName;
  this.password = password;
  return this;
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(passwordProvidedByUser) {
  return this.password === passwordProvidedByUser;
};

export {
  User,
};
