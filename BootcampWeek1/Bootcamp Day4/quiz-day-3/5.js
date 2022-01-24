let numbers = [1, 2, 3, 4, 5];

let jumlah = num => {
    let angka_dikurang = [];
    for (let i = 0; i < num.length; i++) {
        angka_dikurang.push(9 - num[i]);
    }

    let a = [];
    for (let j = 0; j < num.length; j++) {
        for (let k = 0; k < angka_dikurang.length; k++) {
            if (angka_dikurang[k] == num[j]) {
                a.push(num[j]);
            }
        }
    }
    return a;
}
console.log(jumlah(numbers));