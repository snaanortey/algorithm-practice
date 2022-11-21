// Given an array, find the index of the largest element

let arr = [2, 904, 560878, -999999, 7009];
// loop through the array
// on the first loop, check if array[i]>array[i+1]
// If array[i]> array[i+1], drop array[1+1]
// Now compare array[i] with array[i+2]

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
