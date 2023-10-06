function tripletsInSortedArray(array, x) {
   for(let i=0; i<array.length-1; i++){
    let min=i+1; //1
    let max=array.length-1; //6
    let extra=x-array[i]; //7
    while(min<max){
        if(array[min]+array[max]===extra){
            return true
        }
        if(array[min]+array[max]>extra){
            max=max-1
        }
        if(array[min]+array[max]<extra){
            min=min+1
        }
    }
   }
   return false
}

console.log(tripletsInSortedArray([2, 3, 4, 8, 9, 20, 40], 9));
