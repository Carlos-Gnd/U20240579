const fs = require('fs');
const fileName = 'estudiantes.json';

function Agregar() {
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err){
            console.error('Error al leer el archivo JSON.', err);
            return;
        }
        //convertir a cadena JSON
        const estudiantes = JSON.parse(data);
        const newEstudiantes = {nombre: 'Carlos', edad: 20, carrera:'Ingenieria en DS'};
        estudiantes.push(newEstudiantes);
    
        fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err)=>{
            if(err){
                console.error('Error al escribir el archivo.', err);
                return;
            }
            console.log('Nuevo estudiante agregado al archivo JSON.');
        });
    });
};

module.exports = Agregar;