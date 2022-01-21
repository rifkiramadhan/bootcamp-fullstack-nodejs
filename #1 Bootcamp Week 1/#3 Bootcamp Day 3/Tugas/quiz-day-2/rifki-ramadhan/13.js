function maxWordLength(x) { 
    let regex = /([^A-Z a-z])+/g;
    let text = x.replace(regex, "").split(" ");
    let longestText = "";
    let longestCount = 0;
    
    for(let i = 0; i < text.length; i++){
      if(text[i].length > longestCount){
        longestCount = text[i].length;
        longestText = text[i];
      }
    }
    return longestText;
  }

console.log(maxWordLength("aku suka bootcamp sentul city"));