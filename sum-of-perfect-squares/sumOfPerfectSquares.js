
function sumOfPerfectSquares(integer) {
  const listOfPerfectSquares = [];

  let loopItem = integer;
  while (loopItem >= 1) {
    if ((loopItem ** 2) <= integer) {
      if ((loopItem ** 2) === integer) {
        return 1;
      }
      listOfPerfectSquares.push((loopItem ** 2));
    }
    loopItem -= 1;
  }

  const listOfAnswers = [];
  function generateSumTillInteger(element, index, array) {
    const currentAnswer = [];
    let currentElement = element;
    let currentSum = 0;
    let currentDifference = 0;

    do {
      if (currentDifference) {
        let currentMaxLessThanDifference = 0;
        for (const value of array) {
          if (value > currentMaxLessThanDifference
            && value <= currentDifference
            && value <= element) {
            currentMaxLessThanDifference = value;
          }
        }
        currentElement = currentMaxLessThanDifference;
      }

      currentSum += currentElement;
      currentDifference = integer - currentSum;
      currentAnswer.push(currentElement);
    } while (currentDifference > 0);
    listOfAnswers.push(currentAnswer);
  }

  listOfPerfectSquares.forEach(generateSumTillInteger);
  const lenOfAnswersArray = [];
  listOfAnswers.every((x) => { lenOfAnswersArray.push(x.length); return true; });
  const smallestAnswerArray = lenOfAnswersArray.sort((a, b) => a - b)[0];
  return smallestAnswerArray;
}


export {
  sumOfPerfectSquares,
};
