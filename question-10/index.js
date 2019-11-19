const htmlTag = document.querySelector("html");
const propertyElements = [];
const divTag = document.querySelector("#elements");

const firstChildProperty = htmlTag.firstChild;
const lastChildProperty = htmlTag.lastChild;
const nextSiblingProperty = htmlTag.nextSibling;
const previousSiblingProperty = htmlTag.previousSibling;
const parentNodeProperty = htmlTag.parentNode;
const childNodeProperty = htmlTag.childNodes;

console.log(firstChildProperty);
console.log(lastChildProperty);
console.log(nextSiblingProperty);
console.log(previousSiblingProperty);
console.log(parentNodeProperty);
childNodeProperty.forEach(element => {
  console.log(element);
});
