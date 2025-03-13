const { Video, Usuari, Comentaris, Valoracions } = require('../models'); // Asegúrate de incluir todos los modelos

async function syncDatabase() {
    try {
        // Sincroniza los modelos con la base de datos
        await Video.sync({ force: true }); // Forzar la creación de tablas
        await Usuari.sync({ force: true });
        await Comentaris.sync({ force: true });
        await Valoracions.sync({ force: true });
        await Video.sync(); // Sync de tablas

        console.log('Base de datos sincronizada correctamente');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
}

syncDatabase();  // Ejecuta la sincronización
