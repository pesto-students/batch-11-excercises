import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(myArray)).toThrow('Every element in the array must be a number.');
  });
  test('should return square array', () => {
    const myArray = [1, 2, 4];
    expect(squareNumbersArray(myArray)).toEqual([1, 4, 16]);
  });
});
