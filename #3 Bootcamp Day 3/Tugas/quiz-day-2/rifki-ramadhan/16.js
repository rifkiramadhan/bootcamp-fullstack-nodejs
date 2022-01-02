function factorial(n){
    var faktor = 1;
        for (var i = 1; i <= n; i++) {
            faktor = faktor * i;
        }
        return faktor;
}

console.log(factorial(1));