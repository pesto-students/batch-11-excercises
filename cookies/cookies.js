// With this script, I am able to clear cookies but
// other than one which is responsible for logout
function clearSession(cookieName) {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
clearSession('user_session');
