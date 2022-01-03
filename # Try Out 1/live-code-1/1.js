/**
 * Toko "Si Dia"
 * 
 * Toko "Si Dia" merupakan toko online yang menyediakan barang-barang keperluan "si dia". 
 * Vincent selaku pemilik toko tersebut ingin mengetahui jumlah dari harga terendah dan harga tertinggi 
 * dari kumpulan harga yang dimilikinya.
 * 
 * Contoh : 
 * let prices = [19, 5, 42, 2, 77]
 * Hasil yang di harapkan -> 79, karena 2 + 77 = 79
 * 
 * let prices = [10, 30, 5, 500]
 * Hasil yang di harapkan -> 505, karena 5 + 500
 * 
 * DIRECTIONS
 * ------------
 * Buatlah sebuah function yang memiliki 1 parameter prices berupa array. 
 * Lalu tentukan jumlah 2 harga terendah dan harga tertinggi dari prices yang diberikan.
 *  
 * RULES : Tidak boleh menggunakan built in function!!
 * */

const sumPrices = prices => {
    // code
    let maxPrices = prices[0]
    let minPrices = prices[0]
    for(let i = 0; i < prices.length; i++){
        if(prices[i] > maxPrices){
          maxPrices = prices[i];
        } 
        if(prices[i] < minPrices){
            minPrices = prices[i];
          } 
      }
      return maxPrices + minPrices;
}

console.log(sumPrices([19000, 5000, 42000, 2000, 77000]))
// 79000

console.log(sumPrices([10000, 30000, 5000, 500000]))
// 505000
