const { subtract, sum } = require("./math");
// const { test, expect } = require("./testing-framework");
// let result, expected;

function sumTest() {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test("sum adds numbers", sumTest);

/**
 * Error throw in stack trace not display source code
 */
// result = sum(3, 7);
// expected = 10;
// expect(result).toBe(expected);

/**
 * Handle manual
 */
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

function subtractTest() {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}
test("subtract subtracts numbers", subtractTest);

// result = subtract(7, 3);
// expected = 4;
// expect(result).toBe(expected);

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
