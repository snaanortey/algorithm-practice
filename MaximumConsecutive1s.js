/**
 * FIND THE MAXIMUM CONSECUTIVE NUMBER OF 1s IN A GIVEN BINARY ARRAY
 * EXAMPLE: FOR ARRAY1=[0,1,1,0,0,1], THE MAX CONSECUTIVE 1s IS 2
 * FOR ARRAY2=[0,1,1,1,1,0,0,1,1,0,1]  THE MAX CONSECUTIVE 1s IS 4
 */


function maxConsecutive1s(arr){
    let max1s=0;
    let i = 0;
    while(i>=0 && i<arr.length){
        while(arr[i]===0 && i<arr.length){
            i++
        }
        let count = 0;
        while(arr[i]===1 && i<arr.length){
            count=count+1;
            i++;
        }
        max1s=Math.max(max1s, count);
    }
    return max1s;
}

console.log(maxConsecutive1s([0,1,1,1,1,0,0,1,1,1,1,1,0,1]));
console.log(maxConsecutive1s([0,0]));