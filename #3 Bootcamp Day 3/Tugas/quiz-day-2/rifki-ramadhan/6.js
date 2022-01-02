function deretRam(k) {
    var ram = [1];
    for (var i = 0; i < k; i++) {
        ram.push(ram[i]*2);
    }
    return ram;
}
console.log(deretRam(7).join(','));