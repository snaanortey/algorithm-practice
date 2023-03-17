/**
 * Given an array, write a funciton that reverses the elements in the array
 * Example. arr= [10, 5, 7, 20]
 * function should return arr=[20, 7, 5, 10]
 */

/**
 * The function reverses the elements in an array and returns the reversed array
 * @param {*} array The array passed as an argument
 * @returns The reversed array
 */
function reverseArray (array) {
    let newArr = [];
 for (let i=array.length-1; i>=0; i--) {
    newArr.push(array[i]) 
 }
 return newArr;
}

let arr= [10, 5, 7, 20];
let arr1= ["breakfast", "brunch", "lunch", "supper"];


console.log(reverseArray(arr1));
