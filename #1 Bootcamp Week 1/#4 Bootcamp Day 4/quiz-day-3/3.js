let filterProduct = (x, y) => {
    let getRes = [];
    for (let i = 0; i < y.length; i++) y[i].startsWith(x) ? getRes.push(y[i]) : 'kosong';
    return getRes;
}

let products = ['Asus Laptop 5432', 'AK-47', 'LG', 'Bluetooth', 'Solo Leveling Webtoon', 'Space Bar Keyboard Organizer & USB Hub Pop']
console.log(filterProduct('A', products));
console.log(filterProduct('S', products));