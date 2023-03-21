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

// To come back to this when I have time. It takes the max sum in the normal subarray
// then take the max sum in the circular subarray (this is gotten by finding the min sum in the normal subarray and 
// substracting that from the total sum of the array)
// Then compare the max of the two and that is the results
// But this does not work for when the array is full of negative numbers
// function maximumcircularsumsubarrayKadane (array){
//   if(array.forEach(element=>element<0)){
//     return 
//   }
// }

module.exports = maximumcircularsumsubarray