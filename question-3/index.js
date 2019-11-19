const getAttributes = () => {
  const linkAttributes = document.querySelector("#w3r").attributes;
  for (const key of Object.keys(linkAttributes)) {
    document.write(
      "<p>Attribute: " +
        linkAttributes[key].localName +
        ", Value: " +
        linkAttributes[key].value +
        "</p>"
    );
  }
};
