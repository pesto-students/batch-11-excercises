import { calculateDiagonalLength } from './rectangleDiagonal';

describe('rectangleBlock', () => {
  it('calculates rectangle diagonal', () => {
    expect(calculateDiagonalLength(3, 4)).toBe(5);
  });
});
