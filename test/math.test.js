const { add, multiply } = require('../math');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply 4 * 3 to equal 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('multiply by zero returns 0', () => {
  expect(multiply(5, 0)).toBe(0);
});