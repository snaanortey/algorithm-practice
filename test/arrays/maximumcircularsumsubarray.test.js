const { describe } = require("node:test");
const maximumcircularsumsubarray = require("../../src/arrays/maximumcircularsumsubarray");

describe("maximumcircularsumsubarray", () => {
  test("should return the maximum length of a subarray", () => {
    expect(maximumcircularsumsubarray([5, -2, 3, 4])).toBe(12);
  });

  test("should return -1 when the length of the array is zero", () => {
    expect(maximumcircularsumsubarray([])).toBe(-1);
  });
});
