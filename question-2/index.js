const getFormvalue = () => {
  const fname = document.querySelector("#fname");
  const lname = document.querySelector("#lname");

  document.write(`${fname.value} ${lname.value}`);
};
