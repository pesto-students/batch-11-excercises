
// function allOfConditions(...functions) {
//   return function output(input) {
//     for (const fn of functions) {
//       const toContinue = fn(input);
//       if (!toContinue) {
//         return
//       }
//     }
//   };
// }

// functional implementation

function allOfConditions(...predicates) {
  return (input) => predicates.reduce((acc, predicate) => acc && predicate(input), true);
}

export {
  allOfConditions,
};
