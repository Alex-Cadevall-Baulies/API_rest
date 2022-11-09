const express = require('express');
const router = express.Router()

const playerClass = require('../class/playerClass')
const playerInfo = require('../models/playerInfo')
const playerJson = require('../utils/playerJson')

// GET return player list
router.get('/', async (req, res) => {
    try {
        let playerList = await playerInfo.findAll({})
        res.send(playerList)
    } catch (err) { console.log(err) }
});

// POST create player
router.post('/:id', async (req, res) => {
    try {
        const id = req.params
        const username = req.body

        const newUser = playerClass(username)
        const userConfirmation = await newUser.createPlayer()
        res.send(userConfirmation)
    } catch (err) { console.lgit addog(err) }
});

// PUT modify player
router.put('/:id', async (req, res) => {
    try {
        let username = req.body
        const user = playerClass(username)
        const newUsername = ""
        const changeUser = user.modifyPlayer(newUsername)

        res.send(`Usuari ${changeUser.player_id} modificat, nou nom d'usuari ${changeUser.username}`)

    } catch (err) { console.log(err) }
});

module.exports = router