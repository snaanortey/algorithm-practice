/**
 * LEFT ROTATE ELEMENTS IN AN ARRAY BY D TIMES
 * Example for arr = [1,2,3,4,5] to left rotate by D=2 times, new arr = [3,4,5,1,2]
 * Example for arr = [10,5,30,15] to left rotate D=3 times, new arr = [15,10,5,30]
 */

// Create empty new array
// Each element starting from the index D is pushed to the new array first
// Then the remaining elements are pushed to the new array in the order they appear

/**
 * The function rotates elements in a array D times
 * @param {*} arr The array to be rotated D times
 * @param {*} D The number of times the array is left rotated
 * @returns The left rotated array
 */
function leftRotateArrayByD(arr, D) {
  const rotatedArray = [];

  for (let i = D; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
  }
  for (let j = 0; j < D; j++) {
    rotatedArray.push(arr[j]);
  }
  return rotatedArray;
}

console.log(leftRotateArrayByD([10,5,30,15],3));


/**
 * A simpler way to do this is to:
 * 1. Reverse the first D elements
 * 2. Reverse the other elements
 * 3. Reverse the entire array
 */
