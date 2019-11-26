import { homeDir } from './homeDir';

describe('homeDir', () => {
  test('Should return your home directory', () => {
    expect(homeDir()).toBe('/home/wasi');
  });
});
