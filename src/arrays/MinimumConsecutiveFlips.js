/**
 * Here, we are to find the minimum  group flips to make the elements of an array all 1s oor all 0s.
 * Example, for Array = [1,1,0,0,0,1] the minimum flip will be form index 2 to 4
 * so we will return "From 2 to 4"
 * For Array = [1,1,1] there is no minimum flip so we return -1
 * For Array = [0, 1] minimum flip can either be from 0 to 0 or from 1 to 1. We chose either
 */

// To come back to this

function minConsecutiveFlips(array) {
  let zeros = 0;
  let ones = 0;
  if (array[0] === 1) {
    ones++;
  } else {
    zeros++;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 && array[i + 1] === 1) {
      ones++;
    }
    if (array[i] === 1 && array[i + 1] === 0) {
      zeros++;
    }
  }
  if (zeros < ones) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i] === 0 && i === 0) || (array[i] === 0 && array[i + 1] === 1))
        // to update
        return;
    }
  }
}


// This function works but returns undefined at the end....

function minConsecutiveFlipsEfficient(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.every((element) => element === 1)) {
      return -1;
    }
    if (array.every((element) => element === 0)) {
      return -1;
    }
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1] && array[i] !== array[0]) {
      console.log(`from ${i}`);
    }
    if (array[i] !== array[i - 1] && array[i] === array[0]) {
      console.log(`to ${i - 1}`);
    }
  }
//   if(array[array.length-1]!==array[0]){
//     console.log(`to ${array.length-1}`)
//   }
  return;
}

console.log(minConsecutiveFlipsEfficient([1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1]));
