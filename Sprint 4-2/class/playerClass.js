const playerInfo = require('../models/playerInfo')

class Player {
    constructor(username) {
        this.username = username
    };

    async createPlayer() {
        let checkedPlayer = await this.checkPlayer()

        if (!checkedPlayer) {
            const user = await playerInfo.create({
                username: this.username,
                register_date: new Date()
            });
            return user
        } else {
            console.log(`${this.username} està ja registrat, prova amb un altre`)
            return new Error (`${this.username} està ja registrat, prova amb un altre`)
        }
    };

    async checkPlayer() {
        try {
            let checkUser = await playerInfo.findAll({
                where: {
                    username: this.username
                }
            });

            console.log(checkUser)

            if (checkUser.length === 0 && this.username === '') {
                let randomID = await playerInfo.count()
                this.username = `ANÒNIM${randomID}`
                return false
            } else if (checkUser.length === 0) {
                return false
            } else { return true }
        } catch (err) {
            console.log(err)
        }
    }

    async getPlayerID() {
        try {
            let checkUser = await playerInfo.findAll({
                where: {
                    username: this.username
                }
            });
        
        if (checkUser.length === 1)
            return checkUser.player_id
        else {
            return false
        }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Player

/*
const name = ''
const insertPlayer = new Player(name)
insertPlayer.createPlayer()*/