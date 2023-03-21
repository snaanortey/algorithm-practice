const { describe } = require("node:test");
const slidingWindowsTechnique = require("../../src/arrays/slidingWindow");


describe("sliding window", () => {
  test("should return the max sum of a subarray with a given number of elements, k", () => {
    expect(slidingWindowsTechnique([1, 8, 30, -5, 20, 7], 3)).toBe(45);
  });
});
