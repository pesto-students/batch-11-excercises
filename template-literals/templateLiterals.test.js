import { templateLiterals } from './templateLiterals';

describe('templateLiterals', () => {
  test('should return a string message', () => {
    expect(templateLiterals()).toBe('No players available in current team!');
    expect(templateLiterals(4, ['Rooney', 'Ronaldo', 'Messi', 'Pogba']))
      .toBe('There are 4 people on the football team. Their names are Rooney, Ronaldo, Messi, Pogba.');
  });
});
