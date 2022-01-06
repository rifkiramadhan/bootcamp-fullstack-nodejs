// /**
//  * Pilar Utama OOP
//  * 
//  * 1. Inheritance
//  * 2. Polymorphism
//  * 3. Encapsulation
//  * 4. Abstraction
//  */

// class Vehicle {
//     constructor(name, type, cc, engine, tags) {
//         this.name = name;
//         this.type = type;
//         this.cc = cc;
//         this.engine = engine;
//         this.tags = tags;
//     }
//     startEngine() {
//         this.engine = true;
//         console.log("Engine has started");
//     }
//     stopEngine() {
//         this.engine = false;
//         console.count("Engine has stopped");
//     }
// }

// class Sedan extends Vehicle {
//     constructor(name, type, cc, engine, tags, nitro) {
//         super(name, type, cc, engine, tags);
//         this.nitro = nitro;
//     }
//     startEngine() {
//         super.startEngine();
//         console.log("Override method sedan")
//     }
// }

// class Pickup extends Vehicle {
//     constructor(name, type, cc, engine, tags, box) {
//         super(name, type, cc, engine, tags)
//         this.box = box;
//     }
// }

// class SUV extends Vehicle {
//     constructor(name, type, cc, engine, tags, wheel) {
//         super(name, type, cc, engine, tags)
//         this.wheel = wheel;
//     }
// }

// let civic = new Sedan("Civic 2021", "sedan", 1500, false, ["lcgc"], true)
// let colt = new Pickup("Colt Pickup", "pickup", 2500, false, [""], 2)
// let tiguan = new SUV("Tiguan", "suv", 5000, false, [""], "4wd")

// console.log(civic)
// console.log(colt)
// console.log(tiguan);

// Encapsulation : public, private, protected
class Student {
    constructor(name, gpa, isGraduate) {
        this._name = name;
        this._gpa = gpa;
        this._isGraduate = isGraduate;
    }
    
    // Getter n Setter
    get name(){
        return this._name;
    }
    get gpa(){
        return this._gpa;
    }
    get isGraduate(){
        return this._isGraduate;
    }

    set setName(name){
        this._name = name;
    }
    set setGpa(gpa){
        this._gpa = gpa
    }
    set setIsGraduate(isGraduate){
        this._isGraduate = isGraduate
    }
}

const student = new Student("james", 3.5, true);


console.log(student);
student.setName = "James";
console.log(student)