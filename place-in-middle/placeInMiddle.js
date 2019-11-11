
function placeInMiddle(list1, list2) {
  const middleOfList1 = Math.floor((list1.length) / 2);
  const firstHalfOfList1 = list1.slice(0, middleOfList1);
  const secondHalfOfList2 = list1.slice(middleOfList1);
  const finalList = firstHalfOfList1.concat(list2).concat(secondHalfOfList2);
  return finalList;
}


export {
  placeInMiddle,
};
