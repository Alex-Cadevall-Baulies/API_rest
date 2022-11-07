const gameInfo = require('./models/gameInfo');
const Player = require('../class/playerClass');

class Game {
    constructor() {
        this.winner = 'placeholder'
        this.looser = 'placeholder'
    }

    async registerGame() {
        const game = await gameInfo.create({
            winner: this.winner,
            looser: this.looser
        });
        console.table(game)
        console.log(`Joc iniciat`)
    }

    async checkPlayers(playerOne, playerTwo) {
        let playerOneID = Player(playerOne).getPlayerID()
        let playerTwoID = Player(playerTwo).getPlayerID()

        if (playerOneID && playerTwoID) {
            this.registerGame()
        } else if (!playerOneID && !playerTwoID) {
            console.log(`Ambdós jugadors han d'estar registrats per jugar`)
        } else if (!playerOneID) {
            console.log(`${playerOne} d'estar registrat per jugar`)
        } else if (!playerTwoID) {
            console.log(`${playerTwo} d'estar registrat per jugar`)
        }
    }

    async gameResults(winner, looser) {

        this.winner = Player(winner).getPlayerID()
        this.looser = Player(looser).getPlayerID()
        let gameLength = gameInfo.length

        const game = await User.findOne({ where: { game_id: gameLength } });

        if (game) {
            game.set({
                winner: this.winner,
                looser: this.looser
            })
        };

        await game.save()

        console.table(game)
        console.log(game.winner)
        console.log(game.looser)
    }
}

module.exports = Game