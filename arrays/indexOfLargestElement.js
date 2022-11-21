// Given an array, find the index of the largest element

let array = [2,904,56,999]
// loop through the array
// on the first loop, check if array[i]>array[i+1]
// If array[i]> array[i+1], drop array[1+1]
// Now compare array[i] with array[i+2]

function indexOfLargestNumber (array) {
for(let i=0; i<array.length; i++) {
    while(array[i]>array[i+1]) {
        return  array[i];
    }
}

}

console.log(indexOfLargestNumber(array)); 