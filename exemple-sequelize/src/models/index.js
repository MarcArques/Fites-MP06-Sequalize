const { sequelize } = require('../config/database'); 

sequelize.sync({ force: true })  
  .then(() => {
    console.log('Base de datos sincronizada correctamente');
    
    sequelize.getQueryInterface().showAllTables()
      .then((tables) => {
        console.log(tables)
        console.log('Tablas existentes:', tables);
        if (!tables.includes('videos')) {
          console.log('La tabla "videos" no existe');
        } else {
          console.log('La tabla "videos" existe');
        }
        if (!tables.includes('usuaris')) {
          console.log('La tabla "usuaris" no existe');
        } else {
          console.log('La tabla "usuaris" existe');
        }
      })
      .catch(err => {
        console.error('Error al obtener tablas:', err);
      });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
