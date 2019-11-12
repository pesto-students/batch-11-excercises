const isArrays = (arg1, arg2) => Array.isArray(arg1) && Array.isArray(arg2);

const isAllNumbers = (arg1, arg2) => {
  const checkarg1 = arg1.every((i) => typeof i === 'number');
  const checkarg2 = arg2.every((i) => typeof i === 'number');
  return checkarg1 && checkarg2;
};

const isEmpty = (arg1, arg2) => arg1.length !== 0 && arg2.length !== 0;

const arrayAddition = (list1, list2) => {
  if (!isArrays(list1, list2)) {
    throw new Error('Arguments must be array of numbers');
  }
  if (!isAllNumbers(list1, list2)) {
    throw new Error('Only numbers ara allowed is the arrays');
  }
  if (!isEmpty(list1, list2)) {
    throw new Error('Any arguments can not be empty');
  }

  let i = 0;
  let j = 0;
  const sum = [];
  while (i < list1.length && j < list2.length) {
    sum.push(list1[i] + list2[j]);
    i += 1;
    j += 1;
  }

  if (i < list1.length) {
    sum.push(...list1.slice(i));
  }
  if (j < list2.length) {
    sum.push(...list2.slice(j));
  }
  return sum;
};

export { arrayAddition };
