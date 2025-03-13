const express = require('express');
const router = express.Router();
const valoracionController = require('../controllers/valoracionController');

// Asegúrate de que el controlador esté correctamente importado
if (!valoracionController) {
    console.error('No se ha encontrado el controlador de valoraciones');
}

// Asegúrate de que la ruta `GET` tenga un controlador
router.get('/', valoracionController.getAll);  
router.get('/:id', valoracionController.getById);  
router.post('/', valoracionController.create);  

module.exports = router;
