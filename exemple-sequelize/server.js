const express = require('express');
const app = express();
const routes = require('./src/routes');
const { sequelize } = require('./src/config/database');

app.use(express.json());
app.use('/api', routes);

sequelize.sync({ force: true }) 
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor corriendo en el puerto 3000');
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
