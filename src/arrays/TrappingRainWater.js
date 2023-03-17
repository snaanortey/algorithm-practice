/**Refer to this link for full question >>>> https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Arrays/video/MTE2OA%3D%3D
 * SUMMARY OF QUESTION
 * Given an array, image each of the numbers in an array is a block of unit, which forms a basin for
 * collecting water. How many units of water can you collect from a given array?
 *
 * EDGE CASE
 * If array is in increasing or decreasing order, you cannot collect any water.
 * Same as if array is made up of 2 or less numbers, or of all the same numbers
 */

// console.log(waterheight([3, 1, 4, 0, 3]));
console.log(waterheight([1, 3, 2, 1, 4, 0, 3]));

function waterheight(arr) {
  let height = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let maxLeft = arr[i];
    let maxRight = arr[i];
    for (let j = 1; j <= i; j++) {
      if (arr[j] > maxLeft) maxLeft = arr[j];
      console.log("i", i);
      console.log("maxLeft", maxLeft);
    }
    for (let k = arr.length - 1; k >= i; k--) {
      if (arr[k] > maxRight) maxRight = arr[k];
      console.log("maxRight", maxRight);
    }
    console.log("height", Math.min(maxLeft, maxRight) - arr[i]);
    height = height + (Math.min(maxLeft, maxRight) - arr[i]);
  }
  return height;
}
