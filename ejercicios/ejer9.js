let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra)=> {
    palabra = palabra.replace().toLowerCase();
    const vocales = "a á e é i í o ó u ú";
    let contadorVo = 0;
    
    for (let i = 0; i < palabra.length; i++) {
        if(vocales.includes(palabra[i])) {
            contadorVo++;
        }
    }

    console.log(`La palabra tiene ${contadorVo} vocales.`)
    process.exit()
})
