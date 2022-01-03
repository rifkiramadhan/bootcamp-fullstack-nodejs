let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// Membuat fungsi push untuk display Anggur, Banana, dan Sirsak
fruits.push('Anggur', 'Banana', 'Sirsak');
console.log(fruits);

// Membuat fungsi pop untuk display Sirsak
fruits.pop('Sirsak');
console.log(fruits);

// Membuat fungsi splice untuk hapus Jambu
fruits.splice(2, 1);
console.log(fruits);

// Membuat fungsi splice untuk hapus semua kecuali Jeruk, Mangga dan Banana
fruits.splice(2, 3);
console.log(fruits);

// Membuat fungsi splice untuk menambahkan Rambutan dan Bengkuang
fruits.splice(2, 0, 'Bangkuang');
console.log(fruits);

// Membuat fungsi splice untuk mereplace Banan dengan Nangka
fruits.splice(3, 1, 'Nangka');
console.log(fruits);

// ====================================================================
let fruits2 = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur2 = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// Membuat fungsi join aray untuk Fruit dan Sayur
concatsayur = fruits2.concat(sayur2);
console.log(concatsayur);

// Membuat fungsi untuk mereverse array
reversesayur = fruits2.concat(sayur2);
console.log(reversesayur.reverse());

// Membuat fungsi dengan 3 parameter
let switchh = (vege, replace, i) => {
    let newArr = []
    concatsayur.forEach(e => {
        if (e != vege) {
            newArr.push(e)
        }
    });
    newArr.splice(i, 1, replace);

    return console.log(newArr);
};

switchh('Tomat', 'Tomat', 'Jeruk');