/**
 * GIVEN AN ARRAY, FIND THE FREQUENCIES OF ELEMENTS IN AN ARRAY. WRITE A FUNCTION THAT TAKES AN ARRAY AND
 * PRINTS THE FREQUENCIES OF ALL THE ELEMENTS IN THE ARRAY
 * Example. For arr=[10,10,10,25,30,30], Frequencies of 10 is3, of 25 is 1, of 30 is 2
 */

function frequencyOfElements(array) {
  let count = 1;
  if (array.length === 0) {
    console.log(`The array has no elements`);
    return;
  }
  if (array.length === 1) {
    console.log(`${array[0]} has a frequency of ${count}`);
    return;
  }
  for (let i = 1; i < array.length; i++) {
    let currentArray = array[i];
    let previousArray = array[i - 1];
    if (currentArray === previousArray) {
      count++;
    } else {
      console.log(`${previousArray} has a frequency of ${count}`);
      count = 1;
    }
  }
  if (count === array.length) {
    console.log(`All elements have a frequency of ${count}`);
  }
}

// first element
// last element
// If all elements are the same

frequencyOfElements([25, 25, 20]);
