const Sequelize = require('sequelize')

const sequelize = new Sequelize('sprint4-2', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize