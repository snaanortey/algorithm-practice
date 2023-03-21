const { describe } = require("node:test");
const majorityElement = require("../../src/arrays/majorityElement");

describe("majorityElement", () => {
  test("should return index of majority element in an array", () => {
    const resultArray = [2,4,5,6,7];
    const result = resultArray.includes(majorityElement([8, 7, 6, 8, 6, 6, 6, 6]));
    expect(result).toBe(true);
  });

  test("should return -1 if there is no majority element in the array", () => {
    expect(majorityElement([8, 7, 6, 8, 6, 6, 4, 6])).toBe(-1);
  });
});
