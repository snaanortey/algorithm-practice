/**
 * The majority element of an array is an element in the array that appears more than
 * n/2 times in the array, where n is the length of the array
 * Example, for Array = [8,3,4,8,8], n=5 and n/2=2.5 and 8 appears 3 times > 2.5 so 8 is the majority element
 * If no majority element exists, then return -1
 * If more than one majority elements exist, return them all
 */



function majorityElement(array) {
  let majorityElement = -1;

  for (let i = 0; i < array.length; i++) {
    let newArray = [];

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        newArray.push(array[j]);
      }
    }
    if (newArray.length > array.length / 2) {
      majorityElement = i;
     
    }
  }
  return majorityElement;
}

/**
 *  Using Moore's voting algorithe, first, loop through the array
 * to find a candidate for the majority element. The way this is done
 * is that we start form the first element and set it to the majority element,
 * then set the count to 1. If the next element equals the first, count is set to +1
 * and majority element remains the same. If the next element is not the same as current majority
 * element, count is set is -1 of value, and majority element changes.
 */

// Not concluded 

function majorityElementMoore(array) {
  let majorityElement = array[0];
  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if ((majorityElement = array[i])) {
      count++;
    } else {
      count-1;
    }
    if ((count = 0)) {
      majorityElement = array[i];
      count++;
    }
    console.log("majorityElement", majorityElement);
    console.log("count", count);
  }
  return majorityElement;
}

const testing = [8, 7, 6, 8, 6, 6, 6, 6, 6, 6, 6, 8, 9, 7];

// console.log(majorityElementMoore(testing));

console.log(majorityElement([2,2,3,3]))

module.exports = majorityElement;
