// naive solution
function findSquareRoot (n: number): number {

    let i =1;
    while(i*i<n){
        i++;
    }
    return (i-1)
}

// more efficient solution

// find the mid point of the number

console.log(findSquareRoot(19.89798))