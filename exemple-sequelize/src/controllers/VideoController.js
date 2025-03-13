const { Video } = require('../models');

const obtenirTots = async (req, res) => {
    try {
        const videos = await Video.findAll();
        res.json(videos);
    } catch (error) {
        res.status(500).send('Error al obtener los videos');
    }
};

const obtenirPerId = async (req, res) => {
    try {
        const video = await Video.findByPk(req.params.id);
        if (video) {
            res.json(video);
        } else {
            res.status(404).send('Video no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener el video');
    }
};

const crearVideo = async (req, res) => {
    try {
        const video = await Video.create(req.body);
        res.status(201).json(video);
    } catch (error) {
        res.status(400).send('Error al crear el video');
    }
};

module.exports = {
    obtenirTots,
    obtenirPerId,
    crearVideo
};
