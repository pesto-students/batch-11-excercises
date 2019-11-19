const highlightText = () => {
  const boldTag = document.querySelectorAll("strong");

  for (let i = 0; i < boldTag.length; i += 1) {
    boldTag[i].style.backgroundColor = "yellow";
  }
};

const removeHighlight = () => {
  const boldTag = document.querySelectorAll("strong");

  for (let i = 0; i < boldTag.length; i += 1) {
    boldTag[i].style.backgroundColor = "white";
  }
};
