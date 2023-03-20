const { describe } = require("node:test");
const longestEvenOddSubArray = require("../../src/arrays/longestEvenOddSubarray");

describe("longestEvenOddSubArray", () => {
  test("should return the length of the longest even odd subarray", () => {
    expect(longestEvenOddSubArray([10, 12, 14, 7, 8])).toBe(3);
  });

  test.only("should return -1 when the length of the array is zero", () => {
    expect(longestEvenOddSubArray([])).toBe(-1);
  });
});
