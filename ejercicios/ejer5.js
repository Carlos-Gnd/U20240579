let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingresé una cadena de texto: ", (cadena)=>{
    rl.question("Ingrese el inicio de la subcadena: ", (inicio)=>{
        rl.question("Ingrese la longitud de la subcadena: ", (longitud)=>{
            const comienzo = parseInt(inicio)
            const long = parseInt(longitud)
            const subcadena = cadena.substring(comienzo, comienzo + long)
            
            console.log(`La subcadena es: ${subcadena}`)
            process.exit()
        })
    })
})
