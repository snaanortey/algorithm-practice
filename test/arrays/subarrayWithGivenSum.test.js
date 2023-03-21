const { describe } = require("node:test");
const subarrayWithGivenSumUsingSlidingWindowTechnique = require("../../src/arrays/subarrayWithGivenSum");


describe("subarray With Given Sum Using the sliding window method", () => {
  test("should return true if there exist a subarray with the given sum", () => {
    expect(
      subarrayWithGivenSumUsingSlidingWindowTechnique([3, 4, 6, 0, 9, 3, 5], 12)
    ).toBe(true);
  });

  test("should return false if there is no subarray with for the given sum", () => {
    expect(
      subarrayWithGivenSumUsingSlidingWindowTechnique(
        [1, 0, 0, 0, 0, 3, 10, 5],
        7
      )
    ).toBe(false);
  });
});
