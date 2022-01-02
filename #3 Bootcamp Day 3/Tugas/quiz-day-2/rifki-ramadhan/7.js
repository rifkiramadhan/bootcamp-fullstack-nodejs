function deretSatu(k) {
    var deret = 0;
    var result = '';
    for (var i = 1; i <= k; i++) {
        deret = deret*10+1;
        if(i<k){
            result += deret + ', ';
        }else{
            result += deret;
        }
    }
    return result;
}
console.log(deretSatu(5));