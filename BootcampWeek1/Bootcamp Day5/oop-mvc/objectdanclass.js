// Object : key dan method

// let vehicle = {
//     //Key
//     name: "Civic 2021",
//     type: "sedan",
//     cc: 1500,
//     engine: false,
//     tags: ["lcgc","affordable"],
//     //Method
//     startEngine: function(){
//         this.engine = true;
//         console.log(`Engine has started!`)
//     },
//     stopEngine: function(){
//         this.engine = false;
//         console.log(`Engine has stopped!`)
//     },
//     identifyVehicle: function(){
//         console.log(`${this.name} - ${this.type}, cc: ${this.cc}`)
//     },
//     showTags: function(){
//         console.log("Tags list:");
//         this.tags.forEach(tag => {
//             console.log(`- ${tag}`)
//         })
//     },
//     addTag: function(tagName){
//         this.tags.push(tagName);
//         console.log(`${tagName} has been inserted.`)
//     }
// }

// vehicle.startEngine();
// console.log(vehicle);
// vehicle.stopEngine();
// console.log(vehicle);
// vehicle.identifyVehicle();
// vehicle.addTag("middle class")
// vehicle.showTags()

// Class
// sebuah blueprint object yang belum jadi

class Vehicle {
    constructor(name, type, cc, engine, tags){
        this.name = name;
        this.type = type;
        this.cc = cc;
        this.engine = engine;
        this.tags = tags;
    }
    startEngine(){
        this.engine = true;
        console.log("Engine has started");
    }
    stopEngine(){
        this.engine = false;
        console.count("Engine has stopped");
    }
}

// instance
// let vehicle = new Vehicle("Civic 2021", "sedan", 1500, false, ["lcgc"])
// console.log(vehicle)
// vehicle => instance of class Vehicle

let civic = new Vehicle("Civic 2021", "sedan", 1500, false, ["lcgc"])
let pickup = new Vehicle("Colt Pickup", "pickup", 3500, false, [""])
let tiguan = new Vehicle("Tiguan 2021", "suv", 5000, false, [""])

console.log(civic)
console.log(pickup)
console.log(tiguan)