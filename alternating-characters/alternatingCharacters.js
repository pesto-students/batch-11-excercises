
function alternatingCharacters(strings) {
  var deletedCounts = [];

  strings.forEach(string => {
    var deletedCount = 0;
    for(var i=0;i< string.length; i++ ){
      if(string.charAt(i-1) === string.charAt(i)){
        deletedCount++;
      }
    }
    deletedCounts.push(deletedCount);
  });

  return deletedCounts;
}

export {
  alternatingCharacters,
};
