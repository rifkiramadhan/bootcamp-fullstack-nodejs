function reverce(...numberArray) {
    let rev = [];
    for(let i = numberArray.length - 1; i >= 0; i--)
    {
      rev.push(numberArray[i])
    }
    return rev.join(",")
 }
 
 console.log("reverce:", reverce(1, 2, 3, 4));