let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingresé una frase: ", (frase)=>{
    const inversion = frase.split('').reverse().join('')
    
    console.log(`La frase invertida es: ${inversion}`)
    process.exit()
})