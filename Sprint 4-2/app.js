const express = require('express');
const app = express();

const sequelize = require('./utils/database')

const gameInfo = require('./models/gameInfo')
const playerInfo = require('./models/playerInfo')
const throws = require('./models/throws')

gameInfo.belongsToMany(playerInfo, { through: throws })

sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

// 