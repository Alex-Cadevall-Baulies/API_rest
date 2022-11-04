const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Player = sequelize.define('player', {
    player_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    register_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = Player;