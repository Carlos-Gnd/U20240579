let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingresé una frase: ", (frase)=>{
    const palabras = frase.trim().split(/\s+/)
    const contador = palabras.length
    
    console.log(`El número de palabras de la frase es: ${contador}`)
    process.exit()
})