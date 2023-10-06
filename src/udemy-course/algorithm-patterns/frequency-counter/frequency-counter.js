function validAnagram(string1, string2){
    // add whatever parameters you deem necessary - good luck!
    // first check that the strings have same length
    if(string1.length!==string2.length){
        return false
    }
    // for both string1 and string2, create an object that maps each letter in each string
    // to the letter's frequency
    const string1obj = {}
    const string2obj = {}
    
    for(let i=0; i<string1.length; i++ ){
        // First check that the letter of the string does not exist as a key in the object
        // Get each letter in the string to be a key in the object without repeting keys
        let letter = string1[i]
        if(string1obj[letter]){
            string1obj[letter]=string1obj[letter]+1
        }else{
            string1obj[letter]=1
        }
    }
    for(let i=0; i<string2.length; i++ ){
        // First check that the letter of the string does not exist as a key in the object
        let letter = string1[i]
        if(string2obj[letter]){
            string2obj[letter]=string2obj[letter]+1
        }else{
            string2obj[letter]=1
        }
    }

    console.log("string1", string1obj)
    console.log("string2", string2obj)
    
    // Check that for each string, the keys of each of the objects are the same
    for (let key in string1obj){
        // if there is no such key in string2obj, return false
        if(!string2obj[key]){
            return false
        }
        // Also check that for each string, the values of each keys are the same
        if(string2obj[key]!==string1obj[key]){
            return false
        }
    }
    
    // Return true if the above conditions are met 
    return true
    // Otherwise return false
  }

  console.log(validAnagram("qwertyqe", "qeywrteq"))