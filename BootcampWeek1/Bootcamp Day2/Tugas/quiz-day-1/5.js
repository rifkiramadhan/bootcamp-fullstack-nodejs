/**
 * =================================================================
 * REVERSE LADDER
 * =================================================================
 * 
 * Diberikan sebuah string yang akan di print seperti berikut:
 * 
 * Contoh:
 * var str = "basic"
 * 
 * Result:
 * B
 * aB
 * BaS
 * iSaB
 * BaSiC
 * 
 * var str = "basics"
 * 
 * Result: 
 * Tidak boleh genap
 * 
 * Buat Algoritma, Pseudocode, Codingan
 */

/**
 * - Algoritma Reverse Ladder
 * Mendeklarasikan variable text
 * Mendeklarasikan variable resultSatu
 * Mendeklarasikan variable resultAkhir
 * Jika text.lenght dibagi 2 habis maka "Tidak boleh genap" lainnya no 5
 * Jika i dimulai dari 0 dan kurang dari text.lenght maka no 5-10
 * Jika j dimulai dari 0 dan kurang dari i maka no 7-8
 * Jika text[j] sama dengan 'a' atau 'i' maka tambah resultSatu = text[j] lainnya tambah text[j].toUpperCase()
 * j + 1 kembali ke no 6
 * Menambahkan resultSatu = baris baru
 *  i + 1 kembali ke no 5
 * Mendeklarasikan variable resultDua isi dengan array resultSatu
 * Membuang value array null/kosong
 * Jika k dimulai dari 0 dan kurang dari resultDua.lenght maka no 14-16
 * Jika k dibagi 2 habis maka tambah resultAkhir = resultDua[k] lainnya resultDua[k] direverse
 * Menambahkan resultAkhir = baris baru
 * k + 1 kembali ke no 13
 */

/**
 * - Pseudocode Reverse Ladder
 * SET variable text WITH STRING
 * SET variable resultSatu WITH STRING
 * SET variable resultAkhir WITH STRING
 * IF text.length % 2 == 0 THEN DISPLAY "Tidak boleh genap" ELSE,
 * FOR variable i EQUAL 0 AND LESS THAN text.length AND i++ THEN,
 * FOR variable j EQUAL 0 AND LESS THAN EQUAL i AND j++ THEN,
 * IF text[j] EQUAL 'a' OR text[j] EQUAL 'i' THEN ADD text[j] INTO resultSatu ELSE ADD text[j].toUpperCase()
 * ADD '\n' INTO resultSatu
 * SET resultDua WITH ARRAY OF resultSatu
 * POP null from resultDua
 * FOR variable k EQUAL 0 AND LESS THAN resultDua.length AND k++ THEN,
 * IF text.length % 2 == 0 THEN ADD resultDua[k] INTO resultAkhir ELSE ADD REVERSE resultDua[k],
 * ADD '\n' INTO resultAkhir
 * DISPLAY resultAkhir
 */

 var text = "basic";
 var resultSatu = "";
 var resultAkhir = "";
 
 if (text.length % 2 == 0) {
     console.log("Tidak boleh genap");
 } else {
     for (var i = 0; i < text.length; i++) {
         for (var j = 0; j <= i; j++) {
             if (text[j] == 'a' || text[j] == 'i') {
                 resultSatu += text[j];
             } else {
                 resultSatu += text[j].toUpperCase();
             }
         }
         resultSatu += '\n';
     }
 
     var resultDua = resultSatu.split("\n");
     resultDua.pop('');
 
     for (var k = 0; k < resultDua.length; k++) {
         if (k % 2 == 0) {
             resultAkhir += resultDua[k];
         } else {
             resultAkhir += resultDua[k].split("").reverse().join("");
         }
         resultAkhir += '\n';
     }
     console.log(resultAkhir);
 }