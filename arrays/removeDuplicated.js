/**REMOVE DUPLICATES FROM A SORTED ARRAY */

/**
 * Removes duplicates from a sorted array
 * @param {*} arr The sorted array
 * @returns Array with distinct elements
 */
function removeDuplicates(arr) {
    const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) newArr.push(arr[i]);
  }

  return newArr;
}

const arr = [1, 2, 2, 3, 3, 3, 5, 6, 7, 7, 7];

console.log(removeDuplicates(arr));


