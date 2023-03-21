/**
 * We are given an array of non-negative integers, and we are to find if a given sum is the sum of a subarray in the array
 * For example for array = [1,4,20,3,10,5] given sum=33, we return true because there is a subarray [20,3,10] with sum=33
 * for array=[1,4,0,0,0,3,10,5] given sum=7, we return true because there is a subarray [4,0,0,0,3] with sum=7
 * for array=[2,4] with sum=3, we will return false
 */

function subarrayWithGivenSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    let curr = 0;
    for (let j = i; j < array.length; j++) {
      curr = curr + array[j];
      if (curr === sum) return true;
    }
  }
  return false;
}

function subarrayWithGivenSumUsingSlidingWindowTechnique(array, sum) {
  let s = 0;
  let curr = 0;
  for (let i = 0; i < array.length; i++) {
    curr = curr + array[i];

    if (curr > sum) {
      curr = curr - array[s];
      s++;
    }
    if (curr === sum) {
      return true;
    }
  }
  return false;
}

// console.log(subarrayWithGivenSum([3, 4, 6, 0, 9, 3, 5], 12));

console.log(
  subarrayWithGivenSumUsingSlidingWindowTechnique([3, 4, 6, 0, 9, 3, 5], 12)
);

module.exports = subarrayWithGivenSumUsingSlidingWindowTechnique;
