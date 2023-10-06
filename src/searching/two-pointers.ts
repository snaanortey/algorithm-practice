function twoPointersApproach(array, x) {
  let max = array.length - 1;
  let min = 0;

  while (min < max) {
    if (array[min] + array[max] === x) {
      return true;
    }
    if (array[min] + array[max] > x) {
      max = max - 1;
    }
    if (array[min] + array[max] < x) {
      min = min + 1;
    }
  }

  return false;
}


console.log(twoPointersApproach([2,5,8,12,30], 19))