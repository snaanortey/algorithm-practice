/**
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

Time Complexity - O(n)
Space Complexity - O(n)

Bonus
You must do this with constant or O(1) space and O(n) time.
 * @param array 
 */

/**
 * This function has a time complexity of O(n) but a space complexity of O(2n)
 * @param array
 * @returns number
 */
function countUniqueValues(array: number[]): number {
  // Create an new array and add the first number in the input array to it
  const newArray = [array[0]];
  // Start a loop with the second index of the array as the starting point
  for (let i = 1; i < array.length; i++) {
    // Check if the second number above is the same as the number in the previous index of the array (the first number)
    if (array[i] !== array[i - 1]) {
      // If they are same, move on to the next index
      // If they are different, save the new number in the new index
      // Do that for each number/ index in the array
      newArray.push(array[i]);
    }
  }
  // return the count of the new array
  console.log("newArray", newArray);
  return newArray.length;
}

console.log(
  countUniqueValuesWithSpaceN([-4, -4, 1, 1, 1, 4, 5, 6, 6, 6, 7, 7, 8])
);

/**
 * This solution uses the same array, does not create a new array so has a space complexity of O(n)
 * @param array
 * @returns number
 */
function countUniqueValuesWithSpaceN(array: number[]): number {
    if(array.length=0) {
        return 0
    }
  // Start by saving the first index of the array in a variable
  let i = 0;
  // Start a loop of the array beginning with the second index; array[1]
  for (let j = 1; j < array.length; j++) {
    // Compare the number of the index in the variable to the number of the first index in the loop
    // If they are not the same, increase i by 1 and replace array[i] with array[j]
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  // return the value of i plus one
  return i + 1;
}
