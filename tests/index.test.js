const { default: test } = require('node:test');
const { add, sub } = require('../index');

test('additionne 2 + 3 pour donner 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('soustraction 3-2 pour donner 1', () => {
    expect(sub(3,2)).toBe(1);
})
