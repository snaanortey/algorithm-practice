/**
 * QUESTION
Find the index of the second larges element in the array
If there are more than one largest elements in the array, treat them as one element and still return the second largest element
Example arr=[20, 10, 20, 8] here, the second largest element is 10
If there the elements in the array are all the same, return -1
Example arr = [10, 10, 10] return -1 
*/

/** 
 * EDGE cases not mentioned in question
1. What if the elements in the array are not numbers?
2. What if there are more than one second largest elements in the array?
*/

/** 
 * PROPOSED SOLUTION
1. First, find the largest element by setting the first element in the array to a var and
comparing that var with each element in the array, returning the index of the element that
contains the largest number
2. Next, save the largest number to a var and loop through the array the second time, returning
the number which is greater than each of the elements but less than the largest element 
**/

/**
 * A function that returns the second largest element in an array
 * @param {*} array The array with numbers
 * @returns The second largest number
 */
function secondLargestNumber(array) {
  let largestNum = array[0];
  let secondLargestNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) largestNum = array[i];
  }

  if (array.every((x) => x === largestNum)) return -1;

  for (let j = 0; j < array.length; j++) {
    if (array[j] > secondLargestNum && array[j] < largestNum)
      secondLargestNum = array[j];
  }

  return array.indexOf(secondLargestNum);
}

// let arr = [2, 904, 56087, 999999, 7009, 190000, 999999];
let arr = [190000, 190000, 190000, 190000, 190000];

console.log(secondLargestNumberTwo(arr));

/** ALTERNATIVE */

/**
 * A function that returns the second largest element in an array
 * @param {*} array The array with numbers
 * @returns The second largest number
 */
function secondLargestNumberTwo(array) {
  let largestNum = array[0];
  let indexOfSecondLargestNum = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) largestNum = array[i];
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] > indexOfSecondLargestNum && array[j] < largestNum)
      indexOfSecondLargestNum = j;
  }

  return indexOfSecondLargestNum;
}
