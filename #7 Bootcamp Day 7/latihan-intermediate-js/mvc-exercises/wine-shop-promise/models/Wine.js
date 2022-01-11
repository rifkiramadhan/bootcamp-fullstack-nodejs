const fs = require('fs');

class Wine {
    constructor(id, name, year, type, createdAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    };

    static getWines(cb) {
        return new Promise((resolve, reject) => {

            fs.readFile('./data.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let wines = JSON.parse(data);
                    wines = wines.map(wine => {
                        const { id, name, year, type, createdAt } = wine;
                        return new Wine(id, name, year, type, createdAt);
                    });
            
                    resolve(wines);
                };
            });
        });
    };

    static wines() {
        return new Promise((resolve, reject) => {
            this.getWines()
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    };

    static add(params) {
        return new Promise((resolve, reject) => {
            this.getWines()
            .then(data => {
                let wines = data;
                const [wine_name] = params;
                let id = wines[wines.length - 1].id + 1;
                let createdAt = new Date();
        
                let formattedWine = this.wineFormatter(wine_name);
                const [name, year, type] = formattedWine;
        
                // console.log(id, name, year, type, createdAt);
                wines.push(new Wine(id, name, year, type, createdAt));
                this.save(wines);
                resolve(`${name} has been added to wine shelf.`);
            })
            .catch(err => {
                reject(err);
            });
        });
    };

    static sell(params){
        return new Promise((resolve, reject) => {
            this.getWines()
            .then(data => {
                let wines = data;
                let id = +params[0];
                let wine_name = '';
        
                wines.forEach(wine => {
                    if(wine.id === id) {
                        wine_name = wine.name;
                    };
                });
        
                wines = wines.filter(wine => wine.id !== id);
                this.save(wines);
        
                resolve(`"${wine_name}" has been sold!`);
            })
            .catch(err => {
                reject(err)
            });
        });
    };

    static rename(params){
        return new Promise((resolve, reject) => {
            this.getWines()
            .then(data => {
                let wines = data;
                let [wine_id, wine_name] = params;
                let formattedWine = this.wineFormatter(wine_name);
                const [name, year, type] = formattedWine;
                wines = wines.map(wine => {
                    if(wine.id === +wine_id){
                        wine.name = name;
                        wine.year = year;
                        wine.type = type;
        
                        return wine;
                    } else {
                        return wine;
                    };
                });
        
                this.save(wines);
                resolve(`Wine number ${wine_id} has been renamed.`);
            })
            .catch(err => {
                reject(err)
            });
        });
    };

    static findById(params){
        return new Promise((resolve, reject) => {
            this.getWines()
            .then(data => {
                let wines = data;
                let id = +params[0];
                let temp = '';
                
                wines.forEach(wine => {
                    if(wine.id === id){
                        temp = `${wine.name} is a ${wine.type} Wine with age of ${2021 - wine.year} years old.`;
                    };
                });
        
                resolve(temp);
            })
            .catch(err => {
                reject(err)
            });
        });
    };

    static wineFormatter(wine_name) {
        let formattedWine = wine_name.split("/");
        const [name, year, type] = formattedWine;

        if (type === "R" || type === 'r') {
            return [name, +year, "Red"];
        } else if (type === "W" || type === 'w') {
            return [name, +year, "White"];
        } else {
            return [name, +year, "Other"];
        };
    };

    static save(wines) {
        fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3));
    };
};

module.exports = Wine;