function segitiga(n ,posisi){
    if(posisi === 'bawah'){
        let string1 = "";
        for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string1 += " ";
        }

        for (let k = 0; k < i; k++) {
            string1 += "*";
        }
            string1 += "\n";
        }
        console.log(string1);
    } else if (posisi === 'atas'){
        let string2 = "";
        for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
            string2 += "*";
        }
            string2 += "\n";
        }
        console.log(string2);
    }
}

segitiga(5,'bawah')