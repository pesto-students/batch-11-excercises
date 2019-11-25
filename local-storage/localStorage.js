// function loggedInChecker() {
//   const urlsJson = localStorage.getItem('bundle_urls');
//   const urlsObject = JSON.parse(urlsJson);
//   if ('site.css' in urlsObject) {
//     return false;
//   }
//   return true;
// }
// loggedInChecker();
const urlsJson = localStorage.getItem('bundle-urls');
const urlsObject = JSON.parse(urlsJson);
const notSignedIn = 'site.css' in urlsObject;
console.log(!notSignedIn);
