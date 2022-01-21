const { Action, RPG, Racing } = require('./Game')
const fs = require('fs')

class Collection {
    static getGames() {
        let games = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        games = games.map(game => {
            const { id, name, genre, year, isReleased } = game
            switch (genre) {
                case 'action':
                    return new Action(id, name, year, isReleased)
                    break;
                case 'rpg':
                    return new RPG(id, name, year, isReleased)
                    break;
                case 'racing':
                    return new Racing(id, name, year, isReleased)
                    break;
            }
        })
        return games
    }
    static showGames() {
        let games = this.getGames()
        games.forEach(game => {
            const { id, name, genre, year, isReleased } = game
            if (isReleased) {
                console.log(`${id}. [X] ${name} - ${year}, Genre : ${genre}`)
            } else {
                console.log(`${id}. [ ] ${name} - ${year}, Genre : ${genre}`)

            }
        })
        // console.table(games)
    }
    static addGame(name, year, genre, isReleased) {
        let games = this.getGames();
        let id = games[games.length - 1].id + 1;
        switch (genre) {
            case 'action':
                games.push(new Action(id, name, year, isReleased))
                break;
            case 'rpg':
                games.push(new RPG(id, name, year, isReleased))
                break;
            case 'racing':
                games.push(new Racing(id, name, year, isReleased))
                break;
        }
        this.save(games)
        console.log(`"${name} has been inputted to collection"`)
    }
    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3))
    }
}

module.exports = Collection