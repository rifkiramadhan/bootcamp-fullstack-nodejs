/**
 * =================================================================
 * KELIPATAN 3 dan 5
 * =================================================================
 *
 * Print kelipatan 3, kelipatan 5, dan kelipatan 3 dan 5.
 * 
 * Contoh:
 * Input: 15
 * Result:
 * 1
 * 2
 * 3 adalah kelipatan 3
 * 4
 * 5 adalah kelipatan 5
 * 6 adalah kelipatan 3
 * 7
 * 8
 * 9 adalah kelipatan 3
 * 10 adalah kelipatan 5
 * 11
 * 12 adalah kelipatan 3
 * 13 
 * 14
 * 15 adalah kelipatan 3 dan 5
 * 
 * Buat Algoritma, Pseudocode, Codingan
*/

/**
 * - Algoritma Kelipatan 3 dan 5
 * Buat perulangan for untuk menampilkan angka 1 sampai 15
 * Membuat kondisi if else jika angka tersebut kelipatan 3, maka ganti angka tersebut dengan kata "Adalah kelipatan 3"
 * Membuat kondisi if else jika angka tersebut kelipatan 5, maka ganti angka tersebut dengan kata "Adalah kelipatan 5"
 * dan jika angka tersebut kelipatan 3, dan 5 maka ganti dengan kata "Adalah kelipatan 3 dan 5"
 */

/**
 * - Pseudocode Kelipatan 3 dan 5
 * for (i = 1; i <= 15; ++i) then
 * if (i % 3 === 0 && i % 5 === 0) then
 * output i
 * end if
 * endfor
 */

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Adalah kelipatan 3 dan 5`);
    } else if (i % 3 === 0) {
        console.log(`${i} Adalah kelipatan 3`);
    } else if (i % 5 === 0) {
        console.log(`${i} Adalah kelipatan 5`);
    } else {
        console.log(i);
    }
}
