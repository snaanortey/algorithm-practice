// For a given array, if a given number is not in the array, return -1.
// If a given number is in the array, return 1
// E.g. for array = [20, 5, 7, 25], for x=5, 5 is in the array so we return 1
// E.g. for array = [20, 5, 7, 25], x=15 is not in the array so we return -1

function searchArray(array, num) {
  for (let i = 0; i < array.length; i++) if (array[i] === num) return 1;

  return -1;
}

console.log(searchArray(["kor", "e", "toron", "see"], "see"));
