const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/VideoController');

router.get('/', VideoController.obtenirTots);
router.get('/:id', VideoController.obtenirPerId);
router.post('/', VideoController.crearVideo);

module.exports = router;
