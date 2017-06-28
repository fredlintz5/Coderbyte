
//call a function that takes a string input
function LetterCapitalize(str) { 

//Spit the provided string into an array
var strArray = str.split(" ");

//loop through array, splitting the 1st character away (capitalizing it), 
//and then adding it back to its split off remaining characters
for (var i = 0; i < strArray.length; i++) {
    
    
    strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1);
}

//join strArray back into string
var capitalizedString = strArray.join(" ");

//return the final product
return capitalizedString;
 
         
}
   
// keep this function call here 
LetterCapitalize(readline());