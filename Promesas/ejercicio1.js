//Verificar si una variable llamada número es igual a 5

let numero = 5

const verificarNumero = new Promise((resolve, reject)=>{
        if (numero === 5) {
            resolve("El número es 5")        
        }else{
            reject("El número no es 5")
        }
    })

verificarNumero
.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error=>{
    console.log(`Error: ` + error)
})