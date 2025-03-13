const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Usuari = sequelize.define('Usuari', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING
    },
    data_registre: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    idioma: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'usuaris'
});

module.exports = Usuari;
