
const sanitizedHTML = (unsanitizedString) => unsanitizedString
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function templateTagFunction(template) {
  return template.map(sanitizedHTML).join('');
}

const callTemplateTagFunction = () => templateTagFunction`The expression 5 > 4 is "true" & 3 < 1 is false`;

export {
  callTemplateTagFunction,
};
