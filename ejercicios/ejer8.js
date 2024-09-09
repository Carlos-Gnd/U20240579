let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Ingresé una frase: ", (palabra)=>{
    let cadena = palabra.replace().toLowerCase();
    const palindromo = cadena.split('').reverse().join('')

    if (cadena === palindromo) {
        console.log(`La palabra es palindromo: ${palabra}`)  
    } else{
        console.log(`La palabra no es palindromo: ${palabra}`)
    }
      
    process.exit()
})
