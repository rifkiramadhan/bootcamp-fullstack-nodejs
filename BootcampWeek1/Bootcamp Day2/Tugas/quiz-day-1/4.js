/**
 * =================================================================
 * PRINT KOTAK
 * =================================================================
 * 
 * Print kotak:
 * 
 * Contoh :
 * Input : 5
 * 
 * #####
 * #   #
 * #   #
 * #   #
 * #####
 * 
 * Buat Algoritma, Pseudocode, Codingan
 */

/**
 * - Algoritma Print Kotak
 * Mendeklarasikan variable inputBox
 * Jika i dimulai dari 0 dan kurang dari inputBox maka no 3-8
 * Mendeklarasikan variable temp
 * Jika j dimulai dari 0 dan kurang dari inputBox maka no 5-7 
 * Jika i lebih dari 0 dan i kurang dari inputBox - 1 maka no 6 lainnya temp += '#'
 * Jika j lebih dari 0 dan j kurang dari inputBox - 1 maka temp += ' ' lainnya '#'
 * j + 1 kembali ke no 4
 * i + 1 kembali ke no 2
 * Selesai
 */

/**
 * - Pseudocode Print Kotak
 * SET variable inputBox WITH NUMERIC
 * FOR variable i EQUAL 0 AND LESS THAN inputBox AND i++ THEN,
 * SET variable temp WITH NUMERIC
 * FOR variable j EQUAL 0 AND LESS THAN inputBox AND j++ THEN,
 * IF i > 0 AND i < inputBox - 1 THEN,
 * IF j > 0 AND j < inputBox - 1 THEN temp += ' ' ELSE temp += '#'
 * ELSE temp += '#'
 */

 var inputBox = 5;

 for (var i = 0; i < inputBox; i++) {
     var temp = '';
     for (var j = 0; j < inputBox; j++) {
         if (i > 0 && i < inputBox - 1) {
             if (j > 0 && j < inputBox - 1) {
                 temp += ' ';
             } else {
                 temp += '#';
             }
         } else {
             temp += '#';
         }
     }
     console.log(temp);
 }