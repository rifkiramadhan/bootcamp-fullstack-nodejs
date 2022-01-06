const Showroom = require('./Showroom')

const showroom = new Showroom();

// console.log(showroom)
showroom.addVehicle("Civic 2021", "sedan", 1500)
showroom.addVehicle("Colt Pickup", "pickup", 2500)
showroom.addVehicle("Tiguan", "suv", 5000)
showroom.deleteVehicle("Colt Pickup")
showroom.updateVehicle("Civic 2021", 3500)
// showroom.showVehicles();
console.log(showroom.exhibitions)