const urlsJson = localStorage.getItem('bundle-urls');
const urlsObject = JSON.parse(urlsJson);
const notSignedIn = 'site.css' in urlsObject;
console.log(!notSignedIn);
