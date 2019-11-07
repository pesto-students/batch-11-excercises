import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(squareNumbersArray(myArray)).toThrow('My custom error');
  });
  test('should return square array', () => {
    const myArray = [1,5,6,7,8];
    expect(squareNumbersArray(myArray)).toEqual([1,25,36,49,64]);
  });
});
