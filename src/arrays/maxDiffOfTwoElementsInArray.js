/**
 * Maximum value of the difference between two elements in an array where we subtract the first appearing element
 * from the next appearing element in the array
 * Example: arr=[2,3,10,6,4,8,1] the maximum value = 10-2=8
 * Example: arr2=[7,9,5,6,3,2] the maximum value = 9-7=2
 * Tip: For sorted arrays, the maximum value is the last element minus the first element
 * Example: arr3=[10,20,30] the maximum value is 30-10=20
 *
 * Edge cases:
 * 1. Array with duplicate elements
 * 2. What if there is no element to the right greater than an element to the left?
 */

function maxDiff(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      newArr.push(array[j] - array[i]);
    }
  }
  let maxNum = newArr[0];
  for (let k = 1; k < newArr.length; k++) {
    if (newArr[k] > maxNum) {
      maxNum = newArr[k];
    }
  }
  return maxNum;
}

/**
 * Alternative solution
 * First, create a variable for the difference between the first and second elements in the array
 * result = array[1]-array[0]
 * Next, temporarily put the minimum value as array[0]
 * minVal = array[0]
 * Then, loop through the array starting at array[1]
 * Replace result each time array[j]-array[j-1]>result
 * Replace minVal each time array[j]<array[0]
 * maxDiff will be result
 * Still don't understand this formula
 */

function maxDiff2(array) {
  let res = array[1] - array[0];
  let minVal = array[0];
  for (let j = 1; j < array.length; j++) {
    if (array[j] - minVal > res) {
      res = array[j] - minVal;
    }
    if (array[j] < minVal) {
      minVal = array[j];
    }
  }
  return res;
}

console.log(maxDiff2([10,20,30]));
