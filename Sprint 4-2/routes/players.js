const express = require('express');
const router = express.Router()

const playerClass = require('../class/playerClass')
const playerInfo = require('../models/playerInfo')
const playerJson = require('../utils/playerJson')

// POST create player

router.post('/', async (req, res) => {
    try {
        let username = req.body
        const newUser = playerClass(username)
        const userConfirmation = newUser.createPlayer()
        res.send(userConfirmation)
    } catch (err) { console.log(err) }
})
// PUT modify player
router.put('/:id', async (req, res) => {
    try {
        

    } catch (err) { console.log(err) }
})
// GET return player list
router.get('/', async (req, res) => {
    try {
        let playerList = await playerInfo.findAll({})
        res.send(playerList)
    } catch (err) { console.log(err) }
})

module.exports = router