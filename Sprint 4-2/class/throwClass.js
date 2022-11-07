const throws = require('../models/throws');

class Throws {
    constructor(playerName, gameID,) {
        this.playerId = playerName,
            this.gameID = gameID,
            this.diceOne = Number(diceOne),
            this.diceTwo = Number(diceTwo),
            this.total = Number(diceOne) + Number(diceTwo)
        this.round = round
    }

    async registerThrows() {
        const game = await throws.create({
            player_id: this.playerId,
            game_id: this.gameID,
            dice_one: this.diceOne,
            dice_two: this.diceTwo,
            total: this.total,
            round: this.round
        })

        console.table(game)
    }
}

module.exports = Throws