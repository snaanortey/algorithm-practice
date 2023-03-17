// Given an array, find the index of the largest element

let arr = [2, 904, 560878, -999999, 7009];

/**
 * A function that returns that index of the largest number in an array
 * @param {*} array Array of numbers
 * @returns Largest number in the array
 */
function indexOfLargestNumber(array) {
    var largestNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) largestNum = array[i];
  }
  return array.indexOf(largestNum);
}

console.log(indexOfLargestNumber(arr));

// Edge case
// All numbers in array are the same so there is no largest element
