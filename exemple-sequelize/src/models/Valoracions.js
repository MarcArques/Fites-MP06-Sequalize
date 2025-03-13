const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Usuari = require('./Usuari'); 
const Video = require('./Video'); 

// Definir el modelo Valoracions
const Valoracions = sequelize.define('Valoracions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valoracio: {
        type: DataTypes.ENUM('like', 'dislike'),
        allowNull: false
    }
}, {
    tableName: 'valoracions' 
});


Valoracions.belongsTo(Usuari, { foreignKey: 'usuari_id', onDelete: 'CASCADE' });
Valoracions.belongsTo(Video, { foreignKey: 'video_id', onDelete: 'CASCADE' });


sequelize.sync().then(async () => {
    await sequelize.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS unique_usuari_video_valoracio
        ON valoracions (usuari_id, video_id);
    `);
});

// Exportar el modelo
module.exports = Valoracions;
