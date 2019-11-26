import { homeDir } from './homeDir';

describe('Home Dir', () => {
  test('It should return the home directory', () => {
    expect(homeDir()).toBe('/home/koushik');
  });
});
