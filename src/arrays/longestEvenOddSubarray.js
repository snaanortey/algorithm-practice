/**
 * GIVEN AN ARRAY, FIND THE SUM OF CONTIGUOUS MAX SUBARRAY IN THE ARRAY SUCH THAT THOSE NUMBERS ARE ALTERNATING EVEN AND ODD NUMBERS.
 * EXAMPLE FOR ARRAY1=[1,2,3] THE POSSIBLE ALTERNATING EVEN AND ODD NUMBERS SUBARRAYS ARE [1], [2], [3], [1,2], [2,3], [1,2,3]
 * NOTE THAT [1,3] IS NOT CONTINUOUS AND AT THE SAME TIME DOES NOT FOLLOW THE EVEN ODD RULE, SO IS NOT A SUBARRAY
 * NOTE THAT IF THE ARRAY2=[2,8,6] THE ELEMENTS ARE ALL EVEN SO THE MAX SUM WILL BE THE HIGHEST SINGLE NUMBER WHICH IS 8
 * EXAMPLE ARRAY3=[10,12,14,7,8] THE MAX POSSIBLE ALTERNATING EVEN AND ODD NUMBERS SUM IS 31 FROM SUM OF SUBARRAY3=[14,7,8]
 * HERE, WE ARE ASSUMING THAT ALL ELEMENTS OF THE ARRAY ARE ALWAYS POSITIVE
 */

function longestEvenOddSubArray(arrat) {
  let curr = [];
  let max = [];
  for (let i = 0; i < arrat.length; i++) {
    if (arrat[i] % 2 === 0 && arrat[i + 1] % 2 === 0) {
      curr = curr;
    } else {
      curr.push(arrat[i]);
    }
    if (curr.length >= max.length) max = curr;
  }
  return max.length;
}

console.log(longestEvenOddSubArray([10, 12, 14, 7, 8]));
console.log(longestEvenOddSubArray([7, 10, 13, 14]));
console.log(longestEvenOddSubArray([10, 12, 8, 4]));

module.exports = longestEvenOddSubArray;
