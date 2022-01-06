class Game {
    constructor(id, name, genre, year, isReleased) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.isReleased = isReleased || false;
    }
}

class Action extends Game {
    constructor(id, name, year, isReleased) {
        super(id, name, "action", year, isReleased)
    }
}
class RPG extends Game {
    constructor(id, name, year, isReleased) {
        super(id, name, "rpg", year, isReleased)
    }
}
class Racing extends Game {
    constructor(id, name, year, isReleased) {
        super(id, name, "racing", year, isReleased)
    }
}

module.exports = {
    Action, RPG, Racing
}