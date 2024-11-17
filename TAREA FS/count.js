const fs = require ('fs');
const fileName = 'estudiantes.json';

function Contar(){
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err){
            console.error('Error al leer el archivo JSON: ', err);
            return;
        }
        const estudiantes = JSON.parse(data);
        console.log(`Número total de estudiantes es: ${estudiantes.length}`);
    });
};

module.exports = Contar;