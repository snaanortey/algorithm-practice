// Given an array, write a function that inserts an outside item at given index of the array
// Example
// let array = [1,2,3];
// let given index be 1
// let element = 5;
// new array should be arrayNew=[1,5,2,3]

/**
 * Inserts an element into a given index of an array
 * @param {*} index Index of the array where the element will be inserted
 * @param {*} array The array where the element will be inserted 
 * @param {*} element The element to be inserted into the array 
 * @returns New array containing new element at given index
 */
function insertAtIndexTwo(index, array, element) {
  let newArray = [];
  for (i = 0; i < index; i++) newArray.push(array[i]);
  newArray.push(element);
  for (i = index; i < array.length; i++) newArray.push(array[i]);
  return newArray;
}

console.log(insertAtIndexTwo(4, [1, 2, 3, 8, 7], 9));
