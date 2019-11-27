import { homeDir } from './homeDir';

describe('Home directory', () => {
  test('should be of length greater than zero', () => {
    const dir = homeDir();
    expect(dir.length).toBeGreaterThan(0);
  });
});
