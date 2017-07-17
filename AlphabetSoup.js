//take a string and rearrange its letters to be in alphabetical order

function AlphabetSoup(str) { 

	//split string into an Array
    var array = str.split("");
    
    //sort the array alphabetically
    var alpha = array.sort();
    
    //rejoin array into string
    var final = alpha.join("");


  return final; 
         
}
   
// keep this function call here 
AlphabetSoup(readline());