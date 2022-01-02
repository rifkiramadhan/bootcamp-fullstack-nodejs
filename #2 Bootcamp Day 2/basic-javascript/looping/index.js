// Looping

// for
// while
// do ... while

// for => mengetahui ingin berapa kali looping

// while => belum mengetahui ingin berapa kali looping


// for (var i = 0; i < 10; i++) {
//     console.log("Angka " + (i + 1))
// }

/**
 * STUDY CASE 1
 * 
 * #####
 * 
 * STUDY CASE 2
 * 
 * ###
 * ###
 * ###
 */

// var temp = "";

// for (var i = 0; i < 5; i++) {
// console.log("#")
// temp = temp + "#";
// temp += "#"
// }
// console.log(temp)

// var kalimat = "saya sarapan pagi";

// console.log(kalimat.length);
// for (var i = 0; i < kalimat.length; i++) {
//     // console.log(kalimat[i])
//     if (kalimat[i] !== " ") {
//         console.log(kalimat[i])
//     }
// }

// var flagA = 0;
// for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === 'a') {
//         flagA++;
//     }
// }
// console.log("Jumlah A : " + flagA)

// Cardano Developer => Blockchain

// var temp = "";
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         // console.log("#")
//         temp += "#"
//     }
//     console.log(temp)
//     temp = ""
// }

var isTrue = true;

// isTrue   => isTrue === true
// !isTrue  => isTrue === false

var i = 0;

// while (isTrue) {
//     console.log(i)
//     i++;
//     if (i === 5) {
//         break;
//     }
// }

while(i < 5){
    console.log(i)
    i++
}