let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingresé una frase: ", (frase)=>{
    rl.question("Ingrese la palabra que desea reemplazar: ", (reemplazar)=>{
        rl.question("Ingrese la nueva palabra: ", (nueva)=>{
            const nuevaFrase =frase.replace(new RegExp(reemplazar), nueva)
            console.log(`La nueva frase es: ${nuevaFrase}`)
            process.exit()
        })
    })
})
