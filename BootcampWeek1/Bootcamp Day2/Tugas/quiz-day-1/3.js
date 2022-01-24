/**
 * =============================================================================
 * PRINT BILANGAN PRIMA
 * ===============================================================================
 * 
 * Print n bilangan prima pertama
 * Contoh :
 * 
 * Input : 5
 * Result : 2 3 5 7 11
 * 
 * Input : 10
 * Result : 2 3 5 7 11
 *
 * Buatlah Algoritma, Pseudocode, Codingan
 */

/**
 * - Algoritma Bilangan Prima
 * Membuat fungsi nextPrime dengan parameter value
 * Membuat kondisi if jika value lebih besar dari 2
 * Membuat variable i, dan q
 * Mendeklarasikan do while
 * Menjalankan return value
 * Membuat variable value, dan result yang nilainya string kosong
 * Membuat perulangan for selama variable i = 0; i < 5; i++
 * Jalankan Result
 * Selesai
 */

/**
 * - Pseudocode Bilangan Prima
 * SET function nextPrime
 * IF value > 2 THEN
 * IF prima == 2 THEN DISPLAY i
 * SET var i, q
 * DO variable i EQUAL 3 variable value PLUS EQUAL 2
 * SET variable q EQUAL Math  
 * WHILE variable i AND LESS THAN EQUAL variable q AND variable value MOD i
 * SET variable i PLUS EQUAL 2
 * WHILE variable i AND LESS THAN EQUAL 2
 * Return variable value
 * FOR variable value EQUAL 0 AND LESS THAN EQUAL i AND j++ THEN,
 * SET variable value EQUAL nextPrime
 * SET result push
 */

 function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

var value, result = [];
for (var i = 0; i < 5; i++) {
    value = nextPrime(value);
    result.push(value);
}
console.log("Result: ", result);