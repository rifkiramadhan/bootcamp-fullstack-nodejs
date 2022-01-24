/**
 * Weapon Scavenging
 * 
 * Array 2 dimensi yang diberikan merupakan asumsi jumlah daerah yang ada
 * 
 * Officer Rick mencari senjata - senjata yang dia dapat dari daerah yang dia lewati dan bertujuan untuk mendapatkan 
 * sebanyak mungkin dari total energi yang dia miliki. 
 * 
 * Senjata yang di cari berupa kode seperti berikut : 
 * R : Revolver
 * H : Handgun
 * S : Shotgun
 * Jika dia menemukan jenis lain atau barang lain maka di abaikan.
 * 
 * Contoh :
 * [
 *      ["#","#","S","#","H","#","R"],
 *      ["X","#","#","A","R","H","S"],
 *      ["R","#","K","#","?","S","H"]
 * ]
 * 
 * Test Case I
 * Energi : 21
 * Result : 
 * [
 *      ["Revolver",3], ["Handgun",3], ["Shotgun",3]
 * ]
 * 
 * Test Case II
 * Energi : 7
 * Result : 
 * [
 *      ["Revolver",1], ["Handgun", 1], ["Shotgun",1]
 * ]
 */

const searchWeapons = (map, energy) => {
    // code
    maps=`${map}`;
    let temp="";
    let amunisi1= 0;
    let amunisi2= 0;
    let amunisi3= 0;
    let r = 0;
    let s = 0;
    let h = 0;
    for (let i = energy; i <maps.length; i++){
        
        if (maps[i] === "R"){
            amunisi1 = r++;

        }  
        if (maps[i]==="S") {
            amunisi2 = s++
        }
        if (maps[i]==="H") {
            amunisi3 = h++
        }
        
    }   
        temp = (" revolver "+amunisi1 + " shotgun " + amunisi2 + " handgun " + amunisi3); 
    return temp

}

console.log(searchWeapons([
    ['R', 'H', '#', '#', 'S'],
    ["#", '#', 'R', 'S', '#'],
    [' ', ' ', 'R', 'H', 'S']
], 10))
// [['Revolver',2],['Handgun',1], ['Shotgun,2]]

console.log(searchWeapons([
    ["#", "#", "#"]
]))
// You don't have energy

console.log(searchWeapons([
    ["#", "#", "#", "#", "?"],
    ["#", " ", "@"],
    ["R", "H", "S", "?", " ", "A", "B"]
], 19))
 // [["Revolver",1], ['Handgun',1], ['Shotgun',1]]