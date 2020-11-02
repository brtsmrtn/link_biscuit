const sumNum = require('./sum');

test('textual desc = adds 1 + 2 to equal 3', () => {
  const firstNum = 1
  const secondNum = 2
  const expectedResult = 3
  const actualResult = sumNum(firstNum, secondNum)
  spyOn('getRe')
  expect(actualResult).toBe(getResult());
});

function getResult() {
  return 3;
}

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});