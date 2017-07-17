
function SimpleSymbols(str) { 







    for (var i = 0; i < str.length; i++) {
    
        if (str[i].match(/[a-z]/i) !== null) { 
                
            if (str[i-1] !== '+' || str[i+1] !== '+')  {
                return false;
            } 
        }  
    }
  
  return true;

}
   
// keep this function call here 
SimpleSymbols(readline());                            


//str[i].match(/[a-z]/i) !== null
///[a-z]/i.test(str[i]) !== null




