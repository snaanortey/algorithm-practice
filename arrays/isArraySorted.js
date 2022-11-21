/**
 * Check if a given array is sorted in increasing order or not
 * Return "yes" if the array is sorted and return "no" if not sorted
 */

/**
 * A function that returns yes if an array is sorted in increasing order
 * @param {*} array The array
 * @returns "Yes" or "No"
 */
function isAraySorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) return "no";
  }
  return "yes";
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99];

console.log(isAraySorted(arr));


