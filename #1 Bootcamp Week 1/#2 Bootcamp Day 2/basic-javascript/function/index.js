// Function : suatu penggalan kode untuk melakukan suatu task tertentu

// Declaration
// Expression
// Arrow

// Function Declaration
// function hello(){
//     console.log("Hello, selamat siang.")
// }

// hello()

// Function Expression
// var hello = function(){
//     console.log("Hello, selamat siang.")
// }
// hello()
// console.log(typeof hello)

// function cekGanjilGenap(num){
//     if(num % 2 === 0){
//         console.log("Genap")
//     } else {
//         console.log("Ganjil")
//     }
// }

// invoke function atau call function
// cekGanjilGenap(5);
// cekGanjilGenap(2);
// cekGanjilGenap(15);
// cekGanjilGenap(10);
// cekGanjilGenap(3);

// var cekGanjilGenap = function (num) {
// if (num % 2 === 0) {
//         return "Genap"
//     } else {
//         return "Ganjil"
//     }
// }
// console.log(cekGanjilGenap(5));

// Modular Function

/**
 * STUDY CASE
 * 
 * Buat calculator sederhana.
 * 
 * Buat function utama dengan nama: calculator(a,opr,b)
 * - a dan b    : merupakan angka
 * - opr        : operator
 * 
 * Contoh:
 * console.log(calculator(5,'+',3)) // 8
 * 
 * Lalu buat modular function seperti berikut:
 * - penjumlahan(a,b)
 * - pengurangan(a,b)
 * - perkalian(a,b)
 * - pembagian(a,b)
 * - modulus(a,b)
 */

function penjumlahan(a, b) {
    return a + b;
}

function pengurangan(a, b) {
    return a - b;
}

function perkalian(a, b) {
    return a * b;
}

function pembagian(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function calculator(a, opr, b) {
    if (opr !== undefined) {
        switch (opr) {
            case '+':
                console.log(penjumlahan(a, b))
                break;
            case '-':
                console.log(pengurangan(a, b))
                break;
            case '*':
                console.log(perkalian(a, b))
                break;
            case '/':
                console.log(pembagian(a, b))
                break;
            case '%':
                console.log(modulus(a, b))
                break;
            default:
                console.log("Masukkan operator yang sesuai, trims!")
                break;
        }
    } else {
        console.log("Tidak ada inputan!")
    }
}

calculator(5, '+', 3);
calculator(5, '-', 3);
calculator(5, '*', 3);
calculator(5, '/', 3);
calculator(5, '%', 3);
calculator(5, '#', 3);
calculator(); // Tidak ada input
