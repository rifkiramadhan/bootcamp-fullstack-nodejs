let products = ['Gambe Box 5', 
                'Dual Heated Travel Mug', 
                'Crosley Collegiate Portable', 
                'Mix For Youtuber', 
                'Asus Laptop 5432', 
                'AK-47', 
                'LG Monitor', 
                'Bluetooth', 
                'Solo Leveling Webtoon', 
                'Space Bar Keyboard Organizer & USB Hub Pop'];
                
let filterProduct = (x, y) => {
    console.log(`\n==== ${ x } ====`);
    for (let i = 0; i < y.length; i++) {
        if (y[i].startsWith(x)) {
            console.log(y[i]);
        }
    }
}

filterProduct('A', products);
filterProduct('B', products);
filterProduct('C', products);
filterProduct('D', products);
filterProduct('E', products);
filterProduct('G', products);
filterProduct('M', products);
filterProduct('O', products);