const { Sequelize, DataTypes } = require('sequelize');
const { connection: sequelize } = require('../conn');

const LuckyNumber = sequelize.define('luckynumber', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_lucky_number : {
        type: DataTypes.NUMBER,        
    },
    expire : {
        type: DataTypes.BIGINT
    }
}, {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    tableName: 'luckynumber'
});

// gera um numero aleatório a partir de uma semente
const generateLuckyNumber = async function (seed) {
    return Math.floor(Math.random() * seed) + 1;
};

// define um timestamp para tempo de vida do número da sorte 
// com base no número de dias
const setExpireDate = async function (days) {
    return new Date().getTime() + days * 24*60*60*1000;
};

module.exports = {LuckyNumber, generateLuckyNumber, setExpireDate};