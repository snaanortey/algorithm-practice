/**
 * GIVEN AN ARRAY, FIND THE SUM OF MAX SUBARRAY IN THE ARRAY. SUBARRAY SHOULD BE CONTIGUOUS ELEMENTS
 * PICKED FROM THE ARRAY.
 * EXAMPLE FOR ARRAY1=[1,2,3] THE POSSIBLE SUBARRAYS ARE [1], [2], [3], [1,2], [2,3], [1,2,3]
 * NOTE THAT [1,3] IS NOT CONTINUOUS SO IS NOT A SUBARRAY
 * NOTE THAT IF THE ARRAY2=[5,8,3] THE MAX SUM IS THE TOTAL SUM OF ALL NUMBER IS THE ARRAY
 * WHEN THE ELEMENTS ARE BOTH POSITIVE AND NEGATIVE, IT BECOMES TRICKY
 * EXAMPLE ARRAY3=[2,3,-8,7,-1,2,3] THE MAX POSSIBLE SUM IS 11 FROM SUM OF SUBARRAY3=[7,-1,2,3]
 * IF THE ARRAY IF MADE OF ONLY NEGATIVE NUMBERS, THE BIGGEST NUMBER IS THE MAX
 * EXAMPLE FOR ARRAY4=[-6,-1,-8], [-1] IS IS THE MAX POSSIBLE SUBARRAY
 */

function maxSubArray(givenArray) {
  let sumRes = 0;
  for (let i = givenArray[0]; i < givenArray.length; i++) {
    let curr = 0;
    for (let j = givenArray[i]; j < givenArray.length; j++) {
      curr = curr + givenArray[j];
      if (curr > sumRes) {
        sumRes = curr;
      }
    }
  }
  return sumRes;
}

// Using Kadane's algorithm

newArray = [1, -2, 3, -1, 2,9,-9,47];

function maxSubArrayKadane(array) {
  let curr = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    curr = Math.max(array[i], curr + array[i]);
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}

console.log(maxSubArrayKadane(newArray));
