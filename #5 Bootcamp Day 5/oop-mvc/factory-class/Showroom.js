// Factory Class : class yang berfokus ke method, tetapi bisa memiliki key
// CRUD : Create Read Update Delete
const { Sedan, Pickup, SUV } = require('./Vehicle')

class Showroom {
    constructor(exhibitions) {
        this.exhibitions = exhibitions || [];
    }
    showVehicles() {
        console.log("List vehicles: ")
        this.exhibitions.forEach((vehicle, index) => {
            console.log(`${index + 1}. ${vehicle.name} - ${vehicle.type}`)
        })
    }
    addVehicle(name, type, cc) {
        // console.log(name, type, cc)
        switch (type) {
            case 'sedan':
                this.exhibitions.push(new Sedan(name, type, cc, false, []))
                break;
            case 'pickup':
                this.exhibitions.push(new Pickup(name, type, cc, false, []))
                break;
            case 'suv':
                this.exhibitions.push(new SUV(name, type, cc, false, []))
                break;
        }
        console.log(`"${name}" has been inserted!`)
    }
    deleteVehicle(vehicleName) {
        this.exhibitions = this.exhibitions.filter(vehicle => vehicle.name !== vehicleName);
        console.log(`${vehicleName} has been delete`)
    }
    updateVehicle(vehicleName, newCC) {
        this.exhibitions = this.exhibitions.map(vehicle => {
            if (vehicle.name === vehicleName) {
                vehicle.cc = newCC;
                return vehicle;
            } else {
                return vehicle;
            }
        })
        console.log(`"${vehicleName} has been updated"`)
    }
}

module.exports = Showroom