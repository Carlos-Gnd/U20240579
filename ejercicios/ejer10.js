let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question(`Ingresé una frase: `, (frase)=>{
    let palabras = frase.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }

    let Fcapital = palabras.join(' ');
    console.log(`Frase capitalizada: ${Fcapital}`);
    process.exit();
})
