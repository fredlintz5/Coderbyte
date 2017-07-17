

function LongestWord(sen) { 
    
    //search the sentence and only keep characters that match those in the regex
    var sortedSentence = sen.match(/[a-z0-9]+/gi); 

    //sort the array's strings based off of their character length in descending order
    var array = sortedSentence.sort(function(a, b) {
    
    
    return b.length - a.length;
    
});

    //return the longest string in the sentence    
    return sortedSentence[0]; 
         
}
   
// keep this function call here 
LongestWord(readline());                            





