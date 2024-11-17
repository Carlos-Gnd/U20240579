const fs = require ('fs');
const fileName = 'estudiantes.json';

function Eliminar(){
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err){
            console.error('Error al leer el archivo JSON: ', err);
            return;
        }
    
        const  estudiantes = JSON.parse(data);
    
        const posicionAEliminar = 0;
    
        if(posicionAEliminar >= 0 && posicionAEliminar < estudiantes.length){
            estudiantes.splice(posicionAEliminar, 1);
    
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err)=>{
                if(err){
                    console.error('Error al escribir el archivo JOSN: ', err);
                    return;
                }
                console.log('Estudiante eliminado exitosamente.');
            });
        }else{
            console.log('La posición proporcionada es invalida.');
        }
    });
};

module.exports = Eliminar;