// Delete one element in an array and move the rest of the elements after that deleted element to one index before
// Example; for array = [1,2,3,4,5], delete 4 and resulting array should be newArray = [1,2,3,5]

/**
 * Deletes an element from an array
 * @param {*} array the array with elements
 * @param {*} element the element in the array to be deleted
 * @returns the same array but without the deleted element
 */
function deletesElement(array, element) {
  // If array does not contain element, return array as is
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      return array;
    }
  }

  // If the element to be deleted is the last element in the array, only remove that element and return the array
  const indexOfElement = array.indexOf(element);
  if (array.indexOf(element) === array.length - 1) {
    array.pop(element);
    return array;
  }

  // Finds the index of the element to be deleted
  // Loops through the array to the element
  // Copies the elements in the array after the given element to be deleted,
  // and replaces the element at the index before each copied element with the element that was copied
  if (array.indexOf(element < array.length - 1)) {
    for (let i = indexOfElement + 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    array.pop(array.length - 1);
  }
  return array;
}

/**
This function deletes and element from an array, but creates a new array which does not include in the deleted element. 
Uses more memory and less time efficient
 */
function deleteElementInArray(array, element) {
  let newArray = [];
  let indexOfElement = array.indexOf(element);

  for (let i = 0; i < indexOfElement; i++) newArray.push(array[i]);
  for (let j = indexOfElement + 1; j < array.length; j++)
    newArray.push(array[j]);

  return newArray;
}

console.log(deletesElement([1, 2, 3, 4], 5));
