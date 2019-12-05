const dropdown = document.getElementById('mySelect');


function getOptions() {
  const optionsCount = dropdown.length;
  const dropdownArray = [...dropdown];
  const options = dropdownArray.reduce((acc, curr) => {
    acc += `${curr.innerText},`;
    return acc;
  }, '');
  alert(`Count of options ${optionsCount} and options are ${options}`);
}
