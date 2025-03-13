const { Usuari, Video, Comentaris, Valoracions } = require('../models');
const path = require('path');
const fs = require('fs').promises;
const Papa = require('papaparse');

async function readCSV(fileName) {
    const filePath = path.join(__dirname, '..', '..', '..', 'data', 'csv', fileName); 
    const fileContent = await fs.readFile(filePath, 'utf8');
    const result = Papa.parse(fileContent, { header: true, skipEmptyLines: true });
    return result.data;
}

async function insertDataFromCSV() {
    try {
        const usuarisData = await readCSV('usuaris.csv');
        const videosData = await readCSV('videos.csv');
        const comentarisData = await readCSV('comentaris.csv');
        const valoracionsData = await readCSV('valoracions.csv');

        // Verifica que los datos se hayan leído correctamente
        console.log('Usuarios leídos:', usuarisData);
        console.log('Videos leídos:', videosData);
        console.log('Comentarios leídos:', comentarisData);
        console.log('Valoraciones leídas:', valoracionsData);

        // Insertar los datos de los usuarios
        for (const usuari of usuarisData) {
            console.log('Insertando usuario:', usuari);
            await Usuari.create({
                username: usuari.username,
                email: usuari.email,
                password: usuari.password,
                nom: usuari.nom,
                idioma: usuari.idioma
            });
        }

        // Insertar los datos de los videos
        for (const video of videosData) {
            console.log('Insertando video:', video);
            await Video.create({
                titol: video.titol,
                descripcio: video.descripcio,
                url_video: video.url_video,
                data_publicacio: video.data_publicacio,
                visualitzacions: video.visualitzacions,
                likes: video.likes
            });
        }

        // Insertar los datos de los comentarios
        for (const comentari of comentarisData) {
            console.log('Insertando comentario:', comentari);
            await Comentaris.create({
                text: comentari.text,
                usuari_id: comentari.usuari_id,
                video_id: comentari.video_id,
                data_creacio: comentari.data_creacio
            });
        }

        // Insertar los datos de las valoraciones
        for (const valoracio of valoracionsData) {
            console.log('Insertando valoracion:', valoracio);
            await Valoracions.create({
                valoracio: valoracio.valoracio,
                usuari_id: valoracio.usuari_id,
                video_id: valoracio.video_id
            });
        }

        console.log("Datos insertados correctamente.");
    } catch (error) {
        console.error("Error al insertar datos desde CSV:", error);
    }
}

// Llamar a la función
insertDataFromCSV();
