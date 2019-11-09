function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.checkPassword = function checkPassword(inputPassword) {
  const storedPassword = this.password;
  return inputPassword === storedPassword || false;
};

export { User };
