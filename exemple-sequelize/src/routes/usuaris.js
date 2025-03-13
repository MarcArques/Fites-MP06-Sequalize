const express = require('express');
const router = express.Router();
const { Usuari } = require('../models');

// GET: Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuaris = await Usuari.findAll();
        res.json(usuaris);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// POST: Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { username, email, password, nom, idioma } = req.body;

        const newUsuari = await Usuari.create({
            username,
            email,
            password,
            nom,
            idioma
        });

        res.status(201).json(newUsuari);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({ message: 'Error al crear el usuario' });
    }
});

module.exports = router;
