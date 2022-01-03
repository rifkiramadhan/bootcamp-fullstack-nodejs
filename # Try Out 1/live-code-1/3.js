/**
 * ===============================
 * JYV ENTERTAINMENT INVITATION
 * =============================== 
 * 
 * Seorang pengusaha muda bernama J.Y. Vincent selaku CEO dari JYV Entertainment dapat undangan untuk mengisi acara January K-POP Concert.
 * JYV akan memberikan group dan jumlah performances dari masing-masing group sesuai dengan budget mereka.
 *  
 * DIRECTION
 * ------------
 * Proses peng-hire an :
 * - Group akan di ambil dari yang paling atas (jangan merubah urutan)
 * - Ketika budget cukup, maka akan meng-hire group tsb dan budget berkurang
 * - Proses akan berulang jika budget masih cukup
 * - Jika sudah tidak bisa meng-hire karena budget tidak cukup, maka proses kelar
 * - Hasil yang di harapkan berupa object literal
 * 
 * Contoh :
 * let groups = [
 * {
 *      name : "B-Bang",
 *      price : 100
 * },
 * {
 *      name : "12yes",
 *      price : 50
 * }
 * ]
 * Budget yang dimiliki adalah 250
 * 
 * Proses :
 * 1. B-Bang akan di hire karena budget cukup, lalu budget berkurang  100 sesuai harga B-Bang
 * 2. 12yes akan di hire karena budget cukup, lalu budget berkurang  50 sesuai harga 12yes
 * 3. Proses berulang karena budget masih cukup dari price terendah
 * 4. Jumlah performance B-Bang akan ditambah 1 karena budget cukup, lalu budget berkurang 100 sesuai harga B-Bang
 * 5. Ketika budget sudah tidak bisa menghire siapapun dari group, maka proses telah selesai
 * 6. Hasil sisa budget akan ditampilkan
 * 7. Expected result berupa object literal
 * 
 * Rules : Tidak boleh menggunakan built-in function!
 */

let groups = [
    {
        name: "Twoosh",
        price: 500
    },
    {
        name: "Itsy",
        price: 175
    },
    {
        name: "GET7",
        price: 550,
    },
    {
        name: "Whitepink",
        price: 250
    },
    {
        name: "JYV",
        price: 300
    }
]


function hireGroup(groups, budget) {
    // code di sini
    var kas = budget;
    var kantong = 0;
    var hasil = { performances: { Twoosh: 0, Itsy: 0, GET7: 0, Whitepink: 0, JYV: 0 }, exchange: 0 }

    for (let i = 0; i < groups.length; i++) {

        if (175 < budget) {
            if (groups[i].name == 'Twoosh') {
                // Name += groups[i].name
                var harga = groups[i].price;
                kantong = kas - harga
                hasil.performances['Twoosh'] += 1;
                hasil.exchange = kantong;
            } else if (groups[i].name == 'Itsy') {
                var harga = groups[i].price;
                kantong = kas - harga
                hasil.performances['Itsy'] += 1;
                hasil.exchange = kantong;
            } else if (groups[i].name == 'GET7') {
                var harga = groups[i].price;
                kantong = kas - harga
                hasil.performances['GET7'] += 1;
                hasil.exchange = kantong;
            } else if (groups[i].name == 'Whitepink') {
                var harga = groups[i].price;
                kantong = kas - harga
                hasil.performances['Whitepink'] += 1;
                hasil.exchange = kantong;
            } else if (groups[i].name == 'JYV') {
                var harga = groups[i].price;
                kantong = kas - harga
                hasil.performances['JYV'] += 1;
                hasil.exchange = kantong;
            }
        } else if (175 > budget) {
            hasil = { performances: {}, exchange: budget };
            return hasil
        } else if (kantong == 0) {
            return "There's no budget.";
        }
    }
    return hasil;

}   

console.log(hireGroup(groups, 5350))
// {
//     performances : {
//         Twoosh : 3,
//         Itsy : 3,
//         GET7 : 3,
//         Whitepink : 3
//         JYV : 3
//     },
//     exchange : 25
// }

console.log(hireGroup(groups, 1000))
// {
//     performances : {
//         Twoosh : 1,
//         Itsy : 1,
//         Whitepink : 1
//     },
//     exchange : 75
// }
console.log(hireGroup(groups, 350))
// {
//     performances : {
//         Itsy : 2,
//     },
//     exchange : 0
// }
console.log(hireGroup(groups, 100))
// {
//     performances :  {}
//     exchange : 100
// }
console.log(hireGroup(groups))
// There's no budget.