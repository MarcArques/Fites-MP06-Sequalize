const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Usuari = require('./Usuari'); 
const Video = require('./Video'); 

const Comentaris = sequelize.define('Comentaris', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_creacio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'comentaris' 
});

Comentaris.belongsTo(Usuari, { foreignKey: 'usuari_id', onDelete: 'CASCADE' });
Comentaris.belongsTo(Video, { foreignKey: 'video_id', onDelete: 'CASCADE' });

module.exports = Comentaris;
