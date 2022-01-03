/**
 * ===============================
 * CLASS GROUPING
 * ===============================
 * 
 * Terdapat list dari beberapa class heroes yang terdapat dalam sebuah game. Class heroes didapat berupa array of objects.
 * Kelompokkan class tersebut menjadi sebuah objects yang berisi array dari nama heroes.
 * 
 * Contoh:  
 * let heroes = [
 *  {
 *      name: "James the Butcher",
 *      class: "Warrior"
 *  },
 *  {
 *      name: "Spellcaster man",
 *      class: "Mage" 
 *  },
 *  {
 *      name: "John cena"
 *      class: "Warrior"
 *  }
 * ]
 *
 * Result:
 * {
 *  Warrior: ["James the Butcher","John the Sickle"],
 *  Mage: ["Spellcaster man"]
 * }
 * 
 * Buatlah function untuk menjawab permasalahan di atas
*/

const groupClass = heroes => {
    // code here
    let result = {};

    for(let i = 0; i < heroes.length; i++) {
        if(result[heroes[i].class] === undefined){
            result[heroes[i].class] = [];
            result[heroes[i].class].push(heroes[i].name);
        } else {
            result[heroes[i].class].push(heroes[i].name)
        }
    }

    return result;
}


// Test Case
console.log(groupClass([
    {
        name: "James the Butcher",
        class: "Warrior",
    },
    {
        name: "Jim spellcast",
        class: "Mage"
    },
    {
        name: "Firefly Stella",
        class: "Thrower"
    },
    {
        name: "Advance lance",
        class: "Warrior"
    },
    {
        name: "Gina poison",
        class: "Mage"
    }
]))

/** Result
{
    Warrior : ["James the Butcher","Advance lance"],
    Mage: ["Jim spellcast","Gina poison"],
    Thrower: ["Firefly Stella"]
}
*/