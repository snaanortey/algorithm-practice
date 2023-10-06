/**
 * Find the highest sum of n continuous numbers in a given array
 */
function slidingWindow(array: number[], num: number): number {
  if (array.length < num) {
    return null;
  }
  let max = 0;

  // Get the sum of the first num numbers in the array and save in variable tempMax
  for (let i = 0; i < num; i++) {
    max +=array[i];
    console.log("firstMax", max);
  }
  let tempMax = max;
  // Loop through the array starting from the number at index num
  for (let i = num; i < array.length; i++) {
    // For each number in the array add array[i] and substract array[i-num]
    tempMax = tempMax - array[i - num] + array[i];
    console.log('tempMax', tempMax, 'max', max)
    max = Math.max(tempMax, max);
  }
  // Compare tempMax to max and return the maximum
  return max;
}



const testArray = [4, 5, 6, 3, 45, 4, -5, -7, 19, 0];

console.log(slidingWindow(testArray,3))