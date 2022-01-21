function searchWord(kata, cari) {
    var array_kata = kata.split(' ');
    var boolean = false;
    for (var i = 0; i < array_kata.length; i++) {
        if (array_kata[i].match(cari)) {
            boolean = true;
        }
    }
    return boolean;
}
console.log(searchWord("aku suka javascript", "t"));
console.log(searchWord("aku suka javascript", "l"));