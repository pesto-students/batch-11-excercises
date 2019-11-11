
function mapFilterAndReduce(members) {
  const membersWithSmallNames = members.filter((member) => member.firstName.length < 5);
  const membersNameLength = membersWithSmallNames.reduce((acc, curr) => {
    acc[curr.firstName] = curr.firstName.length;
    return acc;
  }, {});
  return membersNameLength;
}

export {
  mapFilterAndReduce,
};
