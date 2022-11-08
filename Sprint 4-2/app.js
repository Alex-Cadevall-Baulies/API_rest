const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const sequelize = require('./utils/database');

const gameInfo = require('./models/gameInfo');
const playerInfo = require('./models/playerInfo');
const throws = require('./models/throws');

const gamesRouter = require('./routes/games');
const playersRouter = require('./routes/players');
const rankingRouter = require('./routes/ranking');

gameInfo.belongsToMany(playerInfo, { through: throws });

sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))


app.use('/players', playersRouter)

app.listen(port, () => console.log(`Running on http://localhost:${port}`))