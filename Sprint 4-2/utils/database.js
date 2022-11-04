const Sequelize = require('sequelize');
const mysql = require("mysql2");

// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ou3gdvrr",
});

// Run create database statement
connection.query(
      `CREATE DATABASE sprint4_2`,
      function (err, results) {
        console.log(results);
        console.log(err);
      }
    );

const sequelize = new Sequelize('sprint4_2', 'root', 'Ou3gdvrr', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;