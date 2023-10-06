export function bubbleSorting(array: number[]): number[] {
  for (let i = 0; i <= array.length - 2; i++) {
    for (let j = 0; j <= array.length - 2 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1],array[j]];
      }
    }
  }

  return array;
}

// console.log(bubbleSorting([10, 8, 20, 5]))

function bubble(array){
  for(let i=0; i<=array.length-2; i++){
    if(array[i]>array[i+1]){
      [array[i],array[i+1]]=[array[i+1],array[i]];
    }
  }

  return array
}

console.log(bubble([10, 8, 20, 5]))