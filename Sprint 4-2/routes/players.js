const express = require('express');
const router = express.Router()

const playerClass = require('../class/playerClass')
const playerInfo = require('../models/playerInfo')

// GET return player list
router.get('/', async (req, res) => {
    try {
        let playerList = await playerInfo.findAll({})
        res.json(playerList)
    } catch (err) { console.log(err) }
});

// POST create player
router.post('/', async (req, res) => {
    try {
        let newUsername = req.body.username
        console.log(newUsername)
        const newUser = new playerClass(newUsername)
        const userConfirmation = await newUser.createPlayer()
        console.log(userConfirmation)
        
        res.json({
            id: userConfirmation.player_id,
            username: userConfirmation.username,
            register_date: userConfirmation.register_date
        })

    } catch (err) { console.log(err) }
});

// PUT modify player
router.put('/:id', async (req, res) => {
    try {
        let currentUsername = req.params.id
        const newUsername = req.body.username
        console.log(currentUsername, newUsername)

        const user = new playerClass(currentUsername)
        const changeUser = user.modifyPlayer(newUsername)

        res.send(`Usuari ${changeUser.player_id} modificat, nou nom d'usuari: ${changeUser.username}`)

    } catch (err) { console.log(err) }
});

module.exports = router