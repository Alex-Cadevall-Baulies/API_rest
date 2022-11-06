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
        console.log(user)
        } else {
            console.log(`${this.username} està ja registrat, prova amb un altre`)
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
        } else { return true}
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