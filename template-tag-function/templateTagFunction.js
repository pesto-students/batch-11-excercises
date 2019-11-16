const santizeInput = inputs => {
  return inputs.map(input =>
    input
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/&/g, '&amp;'),
  );
};

function templateTagFunction(unsafe, ...expressions) {
  const sanitizedExpressions = santizeInput(expressions);
  const santizedString = santizeInput(unsafe);
  return santizedString[0] + sanitizedExpressions[0] + santizedString[1] + sanitizedExpressions[1] + santizedString[2];
}

const callTemplateTagFunction = (exp1, exp2) => templateTagFunction`The expression ${exp1} is "true" & ${exp2} is false`;

export {
  callTemplateTagFunction,
};
