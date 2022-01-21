// Array : variable yang memiliki banyak value dan index

var numbers = [1, 2, 3, 4, 5];
var items = ["laptop", "mouse", "hp"]
var students = ["Vincent", 3.21, true]

// console.log(numbers);
// console.log(items);
// console.log(students);
// console.log(students.length);

// Access index awal
// console.log(numbers[0]);

// Access index terakhir
// console.log(numbers[numbers.length - 1]);

// for(var i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// Array Built in Function

// .push()

numbers.push(6, 7);
// console.log(numbers)

//.pop()

numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

// console.log(numbers)

// FIFO : First In First Out 
// LIFO : Last In First Out


// .unshift()

numbers.unshift(0, -1);
// console.log(numbers)

// .shift()

numbers.shift()
// console.log(numbers)

// VISUAL, AUDITORI, KINESTETIK 

// Array MULTIDIMENSI

var carts = [
    ["greenfields 500ml", "dairy", 15000],
    ["madu", "honey", 7500],
    ["torabika", "coffee", 17500]
]
// console.log(carts);
for (var i = 0; i < carts.length; i++) {
    for (var j = 0; j < carts[i].length; j++) {
        console.log(carts[i][j])
    }
}
