/**
 * Maximum value of the difference between two elements in an array where we subtract the first appearing element
 * from the next appearing element in the array
 * Example: arr=[2,3,10,6,4,8,1] the maximum value = 10-2=8
 * Example: arr2=[7,9,5,6,3,2] the maximum value = 9-7=2
 * Tip: For sorted arrays, the maximum value is the last element minus the first element
 * Example: arr3=[10,20,30] the maximum value is 30-10=20
 * 
 * Edge cases: 
 * 1. Array with duplicate elements
 */


function maxDiff (array) {
    const newArr=[];
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            newArr.push(array[j]-array[i])
        }
    }
    console.log(newArr);
    let maxNum=newArr[0];
    for(let k=1; k<newArr.length;k++){
        if (newArr[k]>maxNum){
            maxNum=newArr[k]
        }
    }
    return maxNum;
}

/**
 * Alternative solution
 * First, create a variable for the different between the first and second elements in the array
 * result = array[1]-array[0]
 * Next, temporarily put the minimum value as array[0]
 * minVal = array[0] 
 */

console.log(maxDiff([30,10,8,2]));