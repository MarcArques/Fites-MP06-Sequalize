const { Valoracions } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const valoraciones = await Valoracions.findAll();
            res.json(valoraciones);
        } catch (error) {
            res.status(500).send('Error al obtener valoraciones');
        }
    },
    getById: async (req, res) => {
        try {
            const valoracion = await Valoracions.findByPk(req.params.id);
            if (valoracion) {
                res.json(valoracion);
            } else {
                res.status(404).send('Valoración no encontrada');
            }
        } catch (error) {
            res.status(500).send('Error al obtener la valoración');
        }
    },
    create: async (req, res) => {
        try {
            const { valoracio, usuari_id, video_id } = req.body;
            const newValoracion = await Valoracions.create({
                valoracio,
                usuari_id,
                video_id
            });
            res.status(201).json(newValoracion);
        } catch (error) {
            res.status(500).send('Error al crear la valoración');
        }
    }
};
