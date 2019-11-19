const getOptions = () => {
  const dropDown = document.querySelector("#mySelect");
  const optionValues = [];

  for (let i = 0; i < dropDown.length; i += 1) {
    optionValues.push(dropDown.options[i].text);
  }

  alert(
    `The total count is: ${dropDown.length} and values are ${optionValues.join(
      ","
    )}`
  );
};
