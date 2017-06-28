

function LetterChanges(str) { 
    
    //create arrays for vowels & alphabet
    var vowel = ['a', 'e','i','o','u'];
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    //split string into an array
    var strArray = str.split("");
    
    
    //loop thorugh String Array, comparing it to Alphabet Array and converting only matches to their character code values + 1, 
    //otherwise converting any non matches to their normal unicode values
    for (var i = 0; i < strArray.length; i++) {
        for (var j = 0; j < alpha.length; j++) {
            if (strArray[i] === alpha[j]) {
                strArray[i] = str.charCodeAt(i) + 1;
            } //else {
                //strArray[i] = str.charCodeAt(i);
            //}
       }
    }
    
    
    //loop through String Array, converting char code #'s' to characters   
    for (var m = 0; m < strArray.length; m++) {
        strArray[m] = String.fromCharCode(strArray[m]);
    }
    
    
    //loop through String Array again, checking for vowels, and converting them to UpperCase
    for (var k = 0; k < strArray.length; k++) {
        for (var l = 0; l < vowel.length; l++) {
            if (strArray[k] === vowel[l]) {
                strArray[k] = strArray[k].toUpperCase();
            }
        }      
    }
    
    
    //Convert strArray back into a String
    var result = strArray.join("");

    

//return strArray;    
return result;


         
}
   
// keep this function call here 
LetterChanges(readline());    















                            
                            
                            
  