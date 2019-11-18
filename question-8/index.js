const getOptions = () => {
  const optionSelect = document.querySelector("#mySelect");
  const optionArray = [];

  for (let i = 0; i < optionSelect.length; i += 1) {
    optionArray.push(optionSelect.options[i].text);
  }

  alert(
    `The total count is: ${
      optionSelect.length
    } and values are ${optionArray.join(",")}`
  );
};
