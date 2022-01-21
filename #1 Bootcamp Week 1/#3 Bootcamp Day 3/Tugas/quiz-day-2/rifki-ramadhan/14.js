function segitiga(n,posisi){
    if(posisi === 'bawah'){
        var string1 = '';
        for(var i = 0; i < n; i++) {
            for(var j = 0; j <= i; j++) {
                string1 += '*';
            }
            string1 += '\n';
        }
        console.log(string1);
    } else if (posisi === 'atas'){
        let string2 = "";
        for (let i = 0; i <= n - 1; i++) {
            for (let j = 0; j < i; j++) {
                string2 += " ";
            }
            for (let k = 0; k < n - i; k++) {
                string2 += "*";
            }
            string2 += "\n";
        }
        console.log(string2);
    }
}

segitiga(5,'bawah')