const fs = require('fs');
const fileName = 'estudiantes.json';

function Crear() {
    const estudiantes =[
        {nombre: 'Juan', edad: 18, carrera: 'Ingenieria en DS'},
        {nombre: 'Ana', edad: 22, carrera: 'Ingenieria Civil'},
        {nombre: 'Pablo', edad: 20, carrera: 'Ingenieria Quimica'},
        {nombre: 'Guillermo', edad: 25, Carrera: 'Arquitectura.'}
    ]
    
    fs.writeFile(fileName, JSON.stringify(estudiantes,null,2), (err)=>{
        if(err){
            console.error('Error al crear el archivo JSON.',err);
            return;
        }
        console.log('El archivo JSON se creo correctamente.');
    });
}

module.exports = Crear;