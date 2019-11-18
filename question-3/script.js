/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function getAttributes() {
  const hrefLink = document.getElementById('w3r');
  const typeParagraph = document.getElementById('type');
  const hrefLanguageParagraph = document.getElementById('hrefLang');
  const hrefrelationsParagraph = document.getElementById('hrefRelation');
  const targetParagraph = document.getElementById('target');
  const hrefParagraph = document.getElementById('href');
  typeParagraph.innerHTML = `HREF Type : ${hrefLink.type}`;
  hrefLanguageParagraph.innerHTML = `Href Language : ${hrefLink.hreflang}`;
  hrefrelationsParagraph.innerHTML = `Href Relation : ${hrefLink.rel}`;
  targetParagraph.innerHTML = `Href Target : ${hrefLink.target}`;
  hrefParagraph.innerHTML = `Href Will Redirect To : ${hrefLink.href}`;
}
