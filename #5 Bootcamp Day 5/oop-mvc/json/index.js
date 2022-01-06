// JSON : JavaScript Object Notation

const fs = require('fs');

// Read File
const items = fs.readFileSync('./data.json', 'utf8');
const itemsParse = JSON.parse(items)

// Write File
itemsParse.push({
    id: 3,
    name: "Razor Gaming",
    type: "mouse",
    price: 500000,
    isSold: true
})

fs.writeFileSync('./data.json', JSON.stringify(itemsParse, null, 3))
console.log(itemsParse)