const fs = require('fs').promises;
const path = require('path');
const Papa = require('papaparse');

async function readCSV(filename) {
    const filePath = path.join(__dirname, '..', '..', '..', 'data', filename); 

    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const parseResult = Papa.parse(fileContent, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true
        });

        if (parseResult.errors.length > 0) {
            throw new Error(`Error al parsear el archivo ${filename}: ${parseResult.errors}`);
        }

        return parseResult.data;
    } catch (error) {
        console.error(`Error al leer el archivo ${filename}:`, error);
        throw error;
    }
}

module.exports = {
    readCSV
};
