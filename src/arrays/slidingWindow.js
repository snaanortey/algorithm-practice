/**
 * for a given array = [1,8,30,-5,20,7] and a given number k=3, consider every possible subarray of size 3
 * in the array and find the max sum of a subarray made up of only k=3 elements
 * in this case the max sum of subarray made of k=3 elements is 30+-5+20=45
 *
 * if array = [5,-10,6,90,3] and k=2, then maxSUm = 6+90=96
 *  */

// Assumptions: array is not empty, and k is less than the length of the array.

function slidingWindows(array, k) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      let curr = 0;
      for (let j = i; j <= i + (k - 1); j++) {
        curr = curr + array[j];
        if (curr > max) {
          max = curr;
        }
      }
    }
    return max;
  }

function slidingWindowTechnique(array, k) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < k; i++) {
      curr = curr + array[i];
      if (curr > max) {
        max = curr;
      }
    }
    for (let i = k; i < array.length; i++) {
      curr = curr + array[i] - array[i - k];
      if (curr > max) {
        max = curr;
      }
    }
    return max;
  }

console.log(slidingWindows([5, -10, 6, 90, 3], 2));

console.log(slidingWindowTechnique([1, 8, 30, -5, 20, 7], 3));

module.exports = slidingWindowTechnique;
