const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Stats = sequelize.define('stats', {
    player_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    throws: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
        allowNull: false
    },
    game_outcome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})