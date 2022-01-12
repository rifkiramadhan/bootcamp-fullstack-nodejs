/**
 * 
 * PASANGAN TERBESAR
 * 
 * 
 * Diberikan sebuah string berisi sebuah kumpulan angka yang akan di ambil pasangan terbesar dengan ketentuan:
 * 1. Angka akan di ambil pasangan ber 2
 * 2. Jika ada angka 0 di depan nya, misal 05 artinya angka 5.
 * 
 * Contoh:
 * 
 * let input = "5279312" -> [52,27,79,93,31,12]
 * Nah, yang terbesar adalah 93.
 * Pastikan dulu sudah di convert menjadi 'number' ya.
 * 
 * DILARANG: Menggunakan built in function kecuali .push()
 * */

const largestNumber = arrNum => {
    //code here
    let index = 0;
    let splitArray = [];
    for (let i = 0; i < arrNum.length; i++) {
        if (i % 2 !== 0) {
            splitArray[index] += arrNum[i];
            index++;
        } else {
            splitArray.push(arrNum[i]);
        }
    }
    return splitArray;
}

const findTheLargest = (n) => {

    if (typeof n !== "undefined") {
        let num = largestNumber(n);
        var temp = 0;
        for (let i = 0; i < num.length; i++) {
            if (temp < num[i]) {
                temp = num[i];
            }
        }
        return temp;
    } else {
        return "Input number";
    }
}

// test case ->
console.log(findTheLargest("5275789312")); // 93
console.log(findTheLargest("5275789312")); // 93
console.log(findTheLargest("313282787")); // 87
console.log(findTheLargest("19")); // 19
console.log(findTheLargest("7")); // 7
console.log(findTheLargest()); // Input number