// Conditional

// if ... else
// switch ... case

// if else biasanya buat kondisi yang belum pasti atau tidak terlalu banyak

// switch case untuk kondisi yang sudah pasti atau bisa lebih banyak

// var number = 10;

// if (number === 10) {
//     console.log("Number 10")
// } else if (number === 5) {
//     console.log("Number 5")
// } else {
//     console.log("Number selain 10 dan 5")
// }

// if (number > 5) {
//     console.log("Number greater than 5")
// } else if (number < 5) {
//     console.log("Number less than 5")
// } else {
//     console.log("Number 5")
// }

// if( number >= 3 && number <= 12){
//     console.log("Number is valid!")
// } else {
//     console.log("Number is not valid!")
// }

// switch(number){
//     case 10:
//         console.log("Number 10");
//         break;
//     case 5:
//         console.log("Number 5");
//         break;
//     default:
//         console.log("Number selain 10 dan 5");
//         break;
// }

// Nested Conditional

/**
 * STUDY CASE
 * 
 * Tiket Wahana
 * 
 * Sebuah menyediakan tiket dengan ketentuan berikut:
 * - Jika pengunjung 'anak-anak', maka:
 *  - Jika tinggi di atas atau sama dengan 150cm, maka "Boleh Masuk"
 *  - Jika di bawah 150 cm, maka "Tidak boleh masuk"
 * - Jika pengunjung 'remaja', maka:
 *  - Jika pengunjung di atas atau sama dengan 150cm, maka "Boleh masuk"
 *  - Jika pengunjung di bawah 150cm, maka "Boleh masuk, pakai sepatu tinggi"
 * - Jika pengunjung 'dewasa', maka:
 *  - Jika tinggi di atas atau sama dengan 150cm, maka "Boleh masuk"
 *  - Jika di bawah 150cm, maka "Tetap boleh masuk"
 */

var visitor = "Dewasa";
var height = 175;

switch (visitor.toLowerCase()) {
    case 'anak-anak':
        if(height >= 150){
            console.log("Boleh masuk")
        } else {
            console.log("Tidak boleh masuk")
        }
        break;
    case 'remaja':
        if( height >= 150){
            console.log("Boleh masuk")
        } else{
            console.log("Boleh masuk, pakai sepatu tinggi")
        }
        break;
    case 'dewasa':
        if( height >= 150){
            console.log("Boleh masuk")
        } else {
            console.log("Tetap boleh masuk")
        }
        break;
    default:
        console.log("Masukkan visitor yang sesuai, trims!")
        break;
}