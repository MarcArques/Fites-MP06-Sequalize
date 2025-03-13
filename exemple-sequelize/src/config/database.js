require('dotenv').config();
const { Sequelize } = require('sequelize');
const path = require('path');
const dbPath = path.join(__dirname, process.env.DB_PATH || 'data');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.sync({ force: true }) 
    .then(() => {
        console.log('Base de datos sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

module.exports = { sequelize };

require('../models/Video');
require('../models/Usuari');
require('../models/Comentaris');
require('../models/Valoracions');
