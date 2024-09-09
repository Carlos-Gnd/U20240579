//simulación de envio de correo electronico

function enviarCorreo(correo){
    return new Promise((resolve, reject)=>{ 
        console.log(`Enviando correo a ${correo}...`)
        setTimeout(()=>{
            if (correo){
                resolve(`Correo enviado a ${correo}`)
            }else{
                reject("No se ingreso ningun correo electronico")
            }
        },2000)
    })
}

enviarCorreo("Carlos@gmail.com")
.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error=>{
    console.log(`Error: ` + error)
})