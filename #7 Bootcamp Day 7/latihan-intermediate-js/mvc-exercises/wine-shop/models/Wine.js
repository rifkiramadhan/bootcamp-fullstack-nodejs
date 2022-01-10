const fs = require('fs');

class Wine {
    constructor(id, name, year, type, createdAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    }

    static getWines() {
        let wines = fs.readFileSync('./data.json', 'utf8');
        wines = JSON.parse(wines);
        wines = wines.map(wine => {
            const { id, name, year, type, createdAt } = wine;
            return new Wine(id, name, year, type, createdAt)
        })
        return wines
    }

    static wines() {
        let wines = this.getWines()
        return wines
    }

    static add(params) {
        let wines = this.getWines()
        const [wine_name] = params
        let id = wines[wines.length - 1].id + 1;
        let createdAt = new Date()

        let formattedWine = this.wineFormatter(wine_name)
        const [name, year, type] = formattedWine

        // console.log(id, name, year, type, createdAt)
        wines.push(new Wine(id, name, year, type, createdAt))
        this.save(wines)
        return `${name} has been added to wine shelf.`
    }

    static sell(params){
        let wines = this.getWines()
        let id = +params[0]
        let wine_name = ''

        wines.forEach(wine => {
            if(wine.id === id) {
                wine_name = wine.name
            }
        })
        wines = wines.filter(wine => wine.id !== id);
        this.save(wines)

        return `"${wine_name}" has been sold!`
    }

    static rename(params){
        let wines = this.getWines()
        let [wine_id, wine_name] = params
        
        let formattedWine = this.wineFormatter(wine_name);
        const [name, year, type] = formattedWine
        wines = wines.map(wine => {
            if(wine.id === +wine_id){
                wine.name = name;
                wine.year = year;
                wine.type = type;

                return wine
            }else{
                return wine
            }
        })
        this.save(wines)
        return `Wine number ${wine_id} has been renamed.`
    }

    static findById(params){
        let wines = this.getWines()
        let id = +params[0]
        let temp = ''
        wines.forEach(wine => {
            if(wine.id === id){
                temp = `${wine.name} is a ${wine.type} Wine with age of ${2021 - wine.year} years old.`
            }
        })
        return temp;
    }

    static wineFormatter(wine_name) {
        let formattedWine = wine_name.split("/")
        const [name, year, type] = formattedWine

        if (type === "R" || type === 'r') {
            return [name, +year, "Red"]
        } else if (type === "W" || type === 'w') {
            return [name, +year, "White"]
        } else {
            return [name, +year, "Other"]
        }
    }

    static save(wines) {
        fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3))
    }
}

module.exports = Wine;