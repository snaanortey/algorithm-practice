import { bubbleSorting } from "../../src/sorting/bubble";

describe.only("bubbleSorting", () => {
  it("should correctly bubble sort an array of integers", ()=> {
    const arrayToBeBubbleSorted = [10, 8, 20, 5];

    const sortedArray = bubbleSorting(arrayToBeBubbleSorted);
  
    expect(sortedArray).toEqual([5, 8, 10, 20]);
  });
  
});
