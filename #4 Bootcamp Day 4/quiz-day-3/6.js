let isCharsUnique = a => {
    let cek = '';

    for (let i = 0; i < a.length; i++) {
        if (cek.includes(a[i]) == false) {
            cek += a[i];
        } else {
            break;
        }
    }
    if (cek.length == a.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isCharsUnique('abcede'));
console.log(isCharsUnique('abcdefg'));