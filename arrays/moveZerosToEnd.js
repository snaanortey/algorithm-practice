/** MOVE ALL THE ZEROS IN AN ARRAY TO THE END OF THE ARRAY, KEEPING THE OTHER ELEMENTS INTACT IN SAME POSITIONS
 * Example: Arr = [8,5,0,10,0,20] returns Arr = [8,5,10,20,0,0]
 * Where there is no zero element in the array, return the same array with no change
 * An array with all zeros has no change
 */

/**
 * A function that moves all the zeros in an array to the end of the array
 * @param {*} arr The array which may or may not include zero elements
 * @returns An array with zero elements at the end of the array
 */
function removeZeros(arr) {
  const zeroArray = [];
  const arrangedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArray.push(arr[i]);
    }
    if (arr[i] !== 0) {
      arrangedArray.push(arr[i]);
    }
  }
  for (let j = 0; j < zeroArray.length; j++) {
    arrangedArray.push(zeroArray[j]);
  }
  return arrangedArray;
}

console.log(removeZeros(["mango", 5, 0, 10, 0, 20, "pie"]));


