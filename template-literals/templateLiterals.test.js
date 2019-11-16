import { templateLiterals } from './templateLiterals';

describe('templateLiterals', () => {
  test('should return a string message', () => {
    expect(templateLiterals())
      .toBe('There are 4 people on the football team. Their names are Rooney, Ronaldo, Messi, Pogba.');
    expect(templateLiterals(5, 'Hitesh', 'Jatin', 'Basant', 'Nitin', 'Harish'))
      .toBe('There are 5 people on the football team. Their names are Hitesh, Jatin, Basant, Nitin, Harish.');
  });
});
