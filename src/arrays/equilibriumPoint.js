/**
 * An array has an equilibrium point if there exists an element in the array such that
 * the sum of element(s) before that element and the sum of element(s) after that element are the same
 * Example
 * For Array1=[3,4,8,-9,  20,   6]  20 is the element so we return true
 * For Array2=[  4,    2,-2] 4 is the element, note that if there is no number before 4, we assume the sum before 4 is zero, so we return true
 * For Array3=[4,2,2] there is no equilibrium so we return false
 */

function equilibriumPoint(array) {
  for (let i = 0; i < array.length; i++) {
    let ls = 0;
    let rs = 0;
    for (let j = 0; j < i; j++) {
      ls = ls + array[j];
      console.log('ls',ls);
    }
    for (let k = i + 1; k < array.length; k++) {
      rs = rs + array[k];
      console.log('rs',rs);
    }
    if (ls === rs) return true;
  }
  return false;
}

console.log(equilibriumPoint([4, 2, -2]));
