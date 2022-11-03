const express = require('express');
const app = express();

const sequelize = require('./utils/database')

const gameInfo = require('./models/gameInfo')
const playerInfo = require('./models/playerInfo')
const playerStats = require('./models/playerStats')

gameInfo.belongsToMany(playerInfo, { through: playerStats })

sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

// 