/**
 * A circular subarray includes the normal subarrays including the ones that are formed by connecting the last element to the
 * first elements
 * Example, for Array = [10,5,-5], the normal subarrays include [10], [5], [-5], [10,5], [5,-5], [10,5,-5]
 * the circular subarray will include [5,-5,10], [-5,10], [-5,10,5]
 */

function maximumcircularsumsubarray(array) {
  if ((array.length <= 0)) return -1;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let curr = 0;
    for (let j = i; j < array.length; j++) {
      let index = (i + j) % array.length;
      curr = curr + array[index];
      if (curr > max) {
        max = curr;
      }
    }
  }
  return max;
}

console.log(maximumcircularsumsubarray([5, -2, 3, 4]));

module.exports = maximumcircularsumsubarray