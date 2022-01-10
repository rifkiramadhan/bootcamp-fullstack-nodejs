// Task 2

const {Chocolate, Sweet, Strawberry} = require('./Cookie');

class Kitchen {
    constructor(container){
        this.container = container || [];
    };

    bake(...cookie){
        let [
                name, 
                price, 
                ingredients, 
                type, 
                isSweet
            ] = cookie;
            
        switch (type) {
            case 'Chocolate':
                this.container.push(new Chocolate(name, 
                                                  price, 
                                                  ingredients, 
                                                  type, 
                                                  isSweet));
                break;
            case 'Sweet':
                this.container.push(new Sweet(name, 
                                              price, 
                                              ingredients, 
                                              type, 
                                              isSweet));
            break;
            case 'Strawberry':
                this.container.push(new Strawberry(name, 
                                                   price, 
                                                   ingredients, 
                                                   type, 
                                                   isSweet));
            break;
        };
        console.log(`-----------------------------`);
        console.log(`${name} telah ditambahkan`);
    };

    eat(cookie){
        let temp = [];
        for (let i = 0; i < this.container.length; i++) {
            if(this.container[i].name !== cookie){
                temp.push(this.container[i]);
            };    
        };
        this.container = temp;
        console.log(`-----------------------------`);
        console.log(`${cookie} telah dimakan`);
    };

    addSugar(sweet){
        let tempSweet = [];
        for (let i = 0; i < this.container.length; i++){
            if (this.container[i].name === sweet) {
                tempSweet.push(this.container[i].isSweet = true);
                console.log(`-----------------------------`);
                console.log(`${sweet} tambahkan gula`);
            };
        };
        return tempSweet;
    };
    
    showCookies(){
        console.log(`-----------------------------`);
        console.log("Daftar Kue : ");
        this.container.forEach((con,i) => {
            let {name, price, ingredients, type, isSweet} = con;
            console.log(`${i+1}. Nama: ${name}, Harga: ${price}, Bahan: ${ingredients}, Jenis: ${type}, Rasa: ${isSweet}`);
        });
    };
};

module.exports =  Kitchen;