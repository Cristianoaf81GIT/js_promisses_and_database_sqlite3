const { Sequelize } = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './db/db.sqlite3'
});


module.exports.connection = connection;