import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(myArray)).toThrow('Array cannot contain non numeric value!');
  });
  test('should return square array', () => {
    const numbers = [1, 2, 3];
    expect(squareNumbersArray(numbers)).toEqual([1, 4, 9]);
  });
});
