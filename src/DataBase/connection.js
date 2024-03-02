const {Sequelize } = require('sequelize');

var dataBase = 'resturantDB';
var userName = 'postgres';
var password = '96857412';

const connection = new Sequelize (dataBase, userName, password,{
    host: 'localhost',
    dialect: 'postgres'
});
module.exports = connection;