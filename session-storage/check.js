showSessionStorage();

function addToSessionStorage() {
  const key = document.querySelector("#key").value;
  const value = document.querySelector("#value").value;
  sessionStorage.setItem(key, value);
  showSessionStorage();
}

function createLi() {
  return document.createElement("li");
}

function showSessionStorage() {
  const status = document.querySelector(".status");
  status.innerHTML = "";
  const ul = document.createElement("ul");
  ul.class = "list";
  status.appendChild(ul);
  if (sessionStorage.length) {
    for (const key of Object.keys(sessionStorage)) {
      const li = createLi();
      li.innerHTML = `Key: ${key}, Value: ${sessionStorage.getItem(key)}`;
      ul.appendChild(li);
      const button = document.createElement("button");
      button.style.margin = "10px";
      button.innerHTML = "X";
      button.setAttribute("type", "button");
      button.setAttribute("value", key);
      button.onclick = function(event) {
        const key = event.target.value;
        sessionStorage.removeItem(key);
        showSessionStorage();
      };
      li.appendChild(button);
    }
  }
}
