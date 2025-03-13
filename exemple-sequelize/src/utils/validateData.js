const { validateCSVData } = require('./csvValidator');

async function main() {
    try {
        console.log('Iniciando validación de datos...');
        const results = await validateCSVData(); // Valida e inserta los datos
        
        console.log('Resumen de validación:');
        console.log(JSON.stringify(results, null, 2));

        if (results.summary.structureValid && results.summary.referentialIntegrityValid) {
            console.log('\n✅ Todos los datos son válidos');
        } else {
            console.error('\n⚠️ Se encontraron problemas con los datos');
            // Aquí puedes agregar más lógica para manejar los errores específicos
        }
    } catch (error) {
        console.error('Error durante la validación:', error);
        process.exit(1);
    }
}

main();
