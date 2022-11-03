const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Game = sequelize.define('game', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    winner_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    looser_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})