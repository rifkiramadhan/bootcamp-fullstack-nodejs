function range(mulai, akhir) {
	var temp = akhir - mulai + 1;
	var array_angka = [];
	for (let i = 0; i < temp; i++){
        array_angka[i] = mulai + i;
    } 
	return array_angka;
}

function randomPosition(k){
    var a = range(100,900);
    var jabaran = [];
    for(let i = 0; i < a.length; i++){
        if(a[i].toString().match(k)){
            jabaran.push(a[i]);
        }
    }
    return jabaran;
}

console.log(randomPosition(7))