// Task 1

class Cookie {
    constructor(name, price, ingredients, type){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
    };
};

class Chocolate extends Cookie{
    constructor(name ,price, ingredients, type, isSweet){
        super(name, price, ingredients, type);
        this.isSweet = isSweet || false;
    };
};

class Sweet extends Cookie{
    constructor(name, price, ingredients, type, isSweet){
        super(name, price, ingredients, type);
        this.isSweet = isSweet || false;
    };
};

class Strawberry extends Cookie{
    constructor(name, price, ingredients, type, isSweet){
        super(name, price, ingredients, type);
        this.isSweet = isSweet || false;
    };
};

module.exports =  {
    Chocolate, Sweet, Strawberry
};