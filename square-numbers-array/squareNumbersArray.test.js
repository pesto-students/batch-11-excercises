import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('Unexpected element in array. An array with only numbers will be accepted, like - [1,2,3]');
  });
  test('should return square array', () => {
    const myArray = [1, 2, 3, 4];
    expect(squareNumbersArray(...myArray)).toStrictEqual([1, 4, 9, 16]);
  });
});
