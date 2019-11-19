const page = document.querySelector("#page");
const header = page.firstChild.nextSibling.firstChild.nextSibling.innerHTML;
console.log("Using firstChild and nextSibling: " + header);
const content = document.querySelector("#content");
console.log(content.parentNode);
console.log(content.previousSibling);
