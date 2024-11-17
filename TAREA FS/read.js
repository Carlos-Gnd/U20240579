const fs = require('fs');
const fileName = 'estudiantes.json';

function Leer() {
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err){
            console.error('El archivo no se pudo leer.', err);
        }
        const estudiantes = JSON.parse(data);
        console.log('Contenido del archivo JSON:', estudiantes);
    });
};

module.exports = Leer;