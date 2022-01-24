// ES6

// 1. var, let, const

// Hoisting : pengangkatan awal
// console.log(number);
// var number = 10;

// let number = 10;
// number = 5;
// console.log(number)

// const pi = 3.14;
// pi = 2.78;
// console.log(pi);

// const cetakAngka = function(){
//     console.log("cetak Angka")
// }

// cetakAngka = 10;
// console.log(cetakAngka)

// 2. Template Literal


// let kata1 = "saya";
// let kata2 = "sudah";
// let kata3 = "lunch";
// saya sudah lunch

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

// ES6
// console.log(`${kata1} ${kata2} ${kata3}.`)

// 3. Arrow Function

// Declaration, Expression, Arrow

// const cekGanjilGenap = num => {
// if(num % 2 === 0){
//     return "genap"
// } else {
//     return "ganjil"
// }
// Ternary
// return num % 2 === 0 ? "genap" : "ganjil"
// }

// const cekGanjilGenap = num => num % 2 === 0 ? "genap" : "ganjil"
// console.log(cekGanjilGenap(5))

// 4. High Order Function

// .forEach

let numbers = [3, 2, 5, 6, 1, 7, 0];

// // ES5
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// ES6
// numbers.forEach((number,index) => {
//     console.log(`Index : ${index} : ${number}`);
// })

// .map
// Result numbers = [9, 4, 25, 36, 1 ,49, 0]

// ES5
// let temp = []
// for(let i = 0; i <numbers.length; i++) {
//     temp.push(numbers[i] ** 2) // pangkat
// }
// console.log(temp)

// ES6
let numbersPower2 = numbers.map(number => number ** 2)
// console.log(temp)

// .filter
// Result : numbersFilter = [25,36, 49]

// ES5
// let temp = []
// for(let i = 0; i < numbersPower2.length; i++) {
//     if(numbersPower2[i] >= 25){
//         temp.push(numbersPower2[i])
//     }
// }
// console.log(temp)

// ES6
let numbersFilter = numbersPower2.filter(number => number >= 25)
// console.log(numbersFilter)

// 5. Destructuring array dan object

let students = ["Vincent", 3.21, true]

// ES5
// let name = students[0];
// let gpa = students[1];
// let isGraduated = students[2];

// ES6
// let [name, gpa, isGraduated] = students

// console.log(name, gpa, isGraduated)

let item = {
    name: "Bear Brand 300ml",
    brand: "susu beruang",
    price: 12000
}

let { name, brand, price } = item;
console.log(name, brand, price);