const gameInfo = require('./models/gameInfo');
const playerInfo = require('../models/playerInfo');

class Game {
    constructor() {
        this.winner = 'placeholder'
        this.looser = 'placeholder'
    }

    async registerGame() {
        let checkPlayers = this.checkPlayers()

        if (checkPlayers === true) {
            const game = await gameInfo.create({
                winner: this.winner,
                looser: this.looser
            });
        console.log(game)
        console.log(`Joc iniciat`)
        } else {
            console.log(`Ambdós jugadors han d'estar registrats per jugar`)
        }
    }

    async checkPlayers() {

        let checkWinner = await playerInfo.findAll({
            where: {
                username: this.winner
            }
        });

        let checkLooser = await playerInfo.findAll({
            where: {
                username: this.looser
            }
        });

        if (checkWinner.length === 1 && checkLooser.length === 1) {
            return true
        } else {return false}

    }

    async gameResults(winner, looser) {
        
        this.winner = winner
        this.looser = looser
        let gameLength = gameInfo.length + 1

        const game = await User.findOne({ where: { game_id: gameLength } });

        if (game) ({
            game.winner = this.winner,
            game.looser = this.looser
        });

        await gameInfo.save()

        console.log(gameInfo)
    }
}

module.exports = Game