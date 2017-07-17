
function TimeConvert(num) { 



var time = Math.floor(num / 60) + ":" +num % 60;


  return time; 
         
}
   
// keep this function call here 
TimeConvert(readline());