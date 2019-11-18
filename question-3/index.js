const getAttributes = () => {
  const aTag = document.querySelector("#w3r");

  const aTagAttributes = aTag.attributes;

  for (const key of Object.keys(aTagAttributes)) {
    document.write(
      `<p>Attribute ${aTagAttributes[key].localName} has value ${aTagAttributes[key].value}</p>`
    );
  }
};
