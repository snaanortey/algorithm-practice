/**     WRITE A FUNCTION THAT TAKES AN ARRAY AND LEFT ROTATES ALL ELEMENTS IN THE ARRAY BY ONE
 * Example an arr=[1,2,3,4] returns arr=[2,3,4,1]
 */

/**
 * The functions takes an array and left rotates all elements by one
 * @param {*} arr The array
 * @returns Returns a left rotated array by one
 */
function leftRotates(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(arr[0]);
  return newArr;
}

/**
 * The functions takes an array and left rotates all elements by one
 * @param {*} arr The array
 * @returns Returns a left rotated array by one
 */
function leftRotatesTwo(arr) {
  const [firstElement] = arr.splice(0, 1);
  arr.push(firstElement);
  return arr;
}

/**
 * The functions takes an array and left rotates all elements by one
 * @param {*} arr The array
 * @returns Returns a left rotated array by one
 */
function leftRotatesThree(arr) {
  let firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
}

console.log(leftRotatesThree([1, 2, 3, 4]));
