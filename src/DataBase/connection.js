const { Sequelize } = require('sequelize');
//posible error
var dataBase = 'restaurantDB';
var userName = 'postgres';
var password = '96857412';

const       connection = new Sequelize(dataBase, userName, password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;