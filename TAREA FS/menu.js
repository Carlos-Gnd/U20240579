const readline = require('readline');

//llamamos las funciones
const Crear = require('./create.js');
const Leer = require('./read.js');
const Agregar = require('./add.js');
const Actualizar = require('./update.js');
const Eliminar = require('./delete.js');
const Contar = require('./count.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

//funcion para mostrar el menú
function mostrarMenu(){
    console.log('\n--- Menú ---');
    console.log('1. Crear archivo JSON con Estudiantes.');
    console.log('2. Leer archivo JSON de Estudiantes.');
    console.log('3. Agregar nuevo Estudiante.');
    console.log('4. Actualizar información de Estudiantes.');
    console.log('5. Eliminar un Estudiante.');
    console.log('6. Contar Estudiantes.');
    console.log('7. Salir.');
}

function menuDeOpciones(opcion){
    switch (opcion) {
        case '1':
            Crear();
            break;
        case '2':
            Leer();
            break;
        case '3':
            Agregar();
            break;
        case '4':
            Actualizar();
            break;
        case '5':
            Eliminar();
            break;
        case '6':
            Contar();
            break;
        case '7':
            console.log("Saliendo del programa...");
            rl.close();
            return;
        default:
            console.log('Opción no válida. Ingresa una opción válida.');
            break;
    }

    setTimeout(iniciarMenu, 5000);
}

function iniciarMenu(){
    mostrarMenu();
    rl.question('Seleccione una opción: ', menuDeOpciones);
};

iniciarMenu();