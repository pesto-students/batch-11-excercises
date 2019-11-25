const isLoggedin = () => {
  if (localStorage.getItem('logged-in') === 'true') {
    return true;
  }
  return false;
};
