function deretNegation(k) {
    var index = 1;
    var result = [];
    for (var i = 1; i <= k; i++) {
        if(i % 2 === 0){
            result.push(index);   
            index++
        }
        else{
            result.push(-index);
        }
    }
    return result;
}
console.log(deretNegation(25).join(','));