function showGenap(n){
    var angka = n.split('');
    var res = [];
    angka.forEach(e => {
        if(e % 2 == 0){
            res.push(e);
        }
    });
    return res;
 }
console.log(showGenap("123456"));