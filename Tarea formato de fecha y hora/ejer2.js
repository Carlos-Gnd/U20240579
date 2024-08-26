let fecha = new Date();
let diaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let diaSemanaOrden = fecha.getDay();
let diaActual = diaSemana[diaSemanaOrden]

console.log(diaActual)