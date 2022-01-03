/**
 * PECAH UANG
 * 
 * Berniat memecah uang menjadi 'recehan', seorang pemuda ditemukan pergi ke suatu tempat.
 * Tempat tersebut dinamakan Bank Solarmas.
 * Bank Solarmas memiliki 5 jenis pecahan uang: 10000,5000,2000,1000,500
 * 
 * Contoh :
 * 
 * let money = 35000;
 * 
 * Result:
 * {
 *  10000: 3,
 *  5000: 1,
 * }
 * 
 * DILARANG: Menggunakan built in function kecuali .push() dan semua Math func
 */

const breakMoney = doit => {
    if (doit >= 35000) {
        var kembalian = [];
        var sepuluhribu = (doit - 5000) / 10000;
        var gojeng = doit % sepuluhribu;

        kembalian.push({ 10000: sepuluhribu, 5000: gojeng });
        return kembalian
    } else if (doit < 10000) {
        var kembalian = [];
        var duaribu = (doit - 500) % 2000 / 1000;
        var serebu = doit % 1000 / 500;
        var gope = doit % 1000 / 500;

        kembalian.push({ 2000: duaribu, 1000: serebu, 500: gope });
        return kembalian;
    }
}

// Test Case

console.log(breakMoney(35000));
/**
{
    10000: 3,
    5000: 1
}
*/
console.log(breakMoney(3500));
/**
{
    2000: 1,
    1000: 1,
    500 : 1
}
*/