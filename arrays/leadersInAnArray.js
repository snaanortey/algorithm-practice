/**
 * GIVEN AN ARRAY, PRINT THE LEADERS IN THE ARRAY.
 * A LEADER IS AN ELEMENT THAT HAS NO OTHER ELEMENT TO THE RIGHT OF IT, GREATER THAN IT
 * Example arr = [7,10,4,3,6,5,2] will have leaders 10,6,5,2
 * Example arr = [10,20,30] will have a leader of 30
 */

/**
 * For each element (array[i]) , starting from i=0 to i=array.length-1,
 * compare to each of the elements on the right array[j], starting from j=i+1 to j=array.length-1
 * If array[j] >= array[i], break the loop
 * The next if condition will be to compare if array[i] > [array.length-1] then we print the number
 * We also end by printing the last element of the array because the last element has no comparison to the right
 */

/**
 * A function that returns elements that are leaders in a given array
 * @param {*} array The given array
 * @returns An array with elements that are leaders from the array that was passed as argument
 */
function leadersInArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) break;
      if (arr[j] === arr[arr.length - 1]) newArr.push(arr[i]);
    }
  }

  newArr.push(arr[arr.length - 1]);
  return newArr;
}

/**
 * Alternative solution with more efficiency
 */

/**
 * A function that returns elements that are leaders in a given array
 * @param {*} array The given array
 * @returns An array with elements that are leaders from the array that was passed as argument
 */
function leadersInArrayTwo(array) {
  const leaderArrayReveresed = [];
  let currentLeader = array[array.length - 1];
  leaderArrayReveresed.push(currentLeader);
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > currentLeader) {
      currentLeader = array[i];
      leaderArrayReveresed.push(currentLeader);
    }
  }
  const leaderArray = [];
  for (let i = leaderArrayReveresed.length - 1; i >= 0; i--) {
    leaderArray.push(leaderArrayReveresed[i]);
  }
  return leaderArray;
}

console.log(leadersInArrayTwo([7, 10, 4, 3, 6, 5, 2]));
