const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Throws = sequelize.define('stats', {
    player_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dice_one: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dice_two: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    round: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Stats;