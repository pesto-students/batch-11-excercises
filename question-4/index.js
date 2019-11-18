const insertRow = () => {
  const table = document.querySelector("#sampleTable");
  var newRow = table.insertRow();
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  var newText1 = document.createTextNode("New row 1");
  var newText2 = document.createTextNode("New row 2");
  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
};
