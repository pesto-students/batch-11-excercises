import { callTemplateTagFunction } from './templateTagFunction';

describe('html', () => {
  test('should escape ", <, >, & when tagged template is passed', () => {
    expect(callTemplateTagFunction()).toBe('The expression 5 &gt; 4 is &quot;true&quot; &amp; 3 &lt; 1 is false');
  });
});
