const highlightText = () => {
  const boldTag = document.querySelectorAll("strong");

  boldTag.forEach(tag => {
    tag.style.backgroundColor = "green";
  });
};

const removeHighlight = () => {
  const boldTag = document.querySelectorAll("strong");

  boldTag.forEach(tag => {
    tag.style.backgroundColor = "white";
  });
};
