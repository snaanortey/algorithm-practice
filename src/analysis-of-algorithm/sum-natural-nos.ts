function sumNaturalNumbers (n) {
    let sum = n

    for(let i=n-1; i>=1; i--){
        
           sum+=i;
        
    }

    return sum

}


console.log(sumNaturalNumbers(5))