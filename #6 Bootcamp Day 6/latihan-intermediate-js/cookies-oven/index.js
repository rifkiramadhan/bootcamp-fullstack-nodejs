// Task 3

const Kitchen = require('./Kitchen');

let container = new Kitchen();

container.bake("Donat Kentang", 
               12000, 
               "Bogasari Flour", 
               "Sweet", 
               false);
container.bake("Pudding Millo", 
                25000, 
                "Maizena",
                "Chocolate", 
                false);
container.bake("Strawberry Bake", 
                5000, 
                "Bogasari Flour", 
                "Strawberry", 
                false);

container.showCookies();
container.addSugar("Donat Kentang");
container.showCookies();
container.eat("Donat Kentang");
container.showCookies();