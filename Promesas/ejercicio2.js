//validar edad

function validarEdad(edad){
    return new Promise((resolve, reject)=>{
        if (edad >=18) {
            resolve("Edad válida para acceder al contenido")
        } else {
            reject("Edad insuficiente para acceder al contenido")
        }
    })
}

validarEdad(18)
.then(res=>{
    console.log(`Mensaje:` + res)
})
.catch(error=>{
    console.log(`Error:` + error)
})