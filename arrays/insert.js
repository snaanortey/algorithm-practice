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
function insertsNewElement(index, array, element) {
  // Inserts the element at the end of the array if the given index equals the length of the array (last index of array + 1) 
  if (index === array.length) {
    array.push(element);
    return array;
  }

  // Where the index is less than the length of the array, 
  // 1. Copy each element after the given index to the next index 
  // 2. Replace the element at the given index with the new element
  if (index < array.length) {
    for (i = array.length - 1; i >= index; i--) array[i + 1] = array[i];
    array[index] = element;
  }
  return array;
}



/**
 The function below creates a new array with the new element at the given index. Uses more memory
 */
function insertAtIndexTwo(index, array, element) {
  let newArray = [];
  for (i = 0; i < index; i++) newArray.push(array[i]);
  newArray.push(element);
  for (i = index; i < array.length; i++) newArray.push(array[i]);
  return newArray;
}

console.log(insertsNewElement(3, [1, 2, 3, 8, 7], 9));
