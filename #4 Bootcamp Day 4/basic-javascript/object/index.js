// Object : kumpulan variable yang memiliki attributes / key

// Object Literal
// var student = {
//     name: "Vincent",
//     gpa: 3.21,
//     isGraduated: true,
//     "myHobbies": ["makan","maen"],
//     100: 1
// }

// var students = ["Vincent", 3.21, true]

// console.log(student.name);
// console.log(student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["myHobbies"]);
// console.log(student["100"]);

var items = ["ASUS ROG", "laptop", 15000000];

/**
 * Result :
 * {
 *  name: "ASUS ROG",
 *  type: "laptop",
 *  price: 150000000
 * }
 */

function convertToObject(arr) {
    var result = {};

    result.name = arr[0];
    result.type = arr[1];
    result.price = arr[2];

    return result;
}

// console.log(convertToObject(items))

/**
 * STUDY CASE 1
 * 
 * Hitung jumlah huruf vokal dalam sebuah string.
 * 
 * Contoh :
 * var str = "saya mau beli oleh-oleh"
 * 
 * Result: 
 * {
 *      a: 3,
 *      i: 1,
 *      u: 1,
 *      e: 3,
 *      o: 2,
 * }
 */

function countVocal(str) {
    var count = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0
    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count.a++;
        } else if (str[i] === 'i') {
            count.i++;
        } else if (str[i] === 'u') {
            count.u++;
        } else if (str[i] === 'e') {
            count.e++;
        } else if (str[i] === 'o') {
            count.o++;
        }
    }

    return count
}

// console.log(countVocal("saya mau beli oleh oleh"));
// console.log(countVocal("jalan jalan ke pasar minggu"));

/**
 * STUDY CASE 2
 * 
 * Hitung vote suara
 * 
 * Contoh :
 * var votes = ["vincent","vincent","ncent","admin","vincent","admin"]
 * 
 * Result: 
 * {
 *      vincent: 3,
 *      ncent: 1,
 *      admin: 2
 * }
 * 
 * Pemenang vote adalah vincent.
 */

function countVote(votes) {
    var result = {}

    for (var i = 0; i < votes.length; i++) {
        if (result[votes[i]] === undefined) {
            result[votes[i]] = 1;
        } else {
            result[votes[i]] += 1;
        }
    }

    return result
}

function voteWinner(votes) {
    var voteObject = countVote(votes);

    var highestScore = 0;
    var winner;
    for (var key in voteObject) {
        if (highestScore < voteObject[key]) {
            highestScore = voteObject[key];
            winner = key;
        }
        // console.log(voteObject[key]);
    }
    return "Pemenang vote adalah " + winner + ' dengan score ' + highestScore + '.'
}

// console.log(voteWinner(["vincent", "vincent", "ncent", "admin", "vincent", "admin"]))

// console.log(voteWinner(["tests","admin","john","cena","tests","john","admin","masbro"]))

// Array of Objects

var items = [
    {
        id: 1,
        name: "Greenfields 500ml",
        type: "dairy",
        price: 15000,
        isAvailable: true
    },
    {
        id: 2,
        name: "Carrots",
        type: "vegetables",
        price: 5000,
        isAvailable: true
    }
]

console.log(items);