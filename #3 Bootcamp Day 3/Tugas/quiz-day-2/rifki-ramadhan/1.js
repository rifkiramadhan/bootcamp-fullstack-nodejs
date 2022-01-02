function sum(n){
    var arrayAngka = n.toString().split('');
    var hasil = 0;
    for(var i = 0; i < arrayAngka.length; i++){
         hasil += parseInt(arrayAngka[i]);   
    }
    return hasil;
}

console.log(sum(3456));