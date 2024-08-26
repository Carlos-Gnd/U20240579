let fecha = new Date(`February 20, 2012 3:12:00`);

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let ampm = horas >= 12 ? 'pm' : 'am';

horas = horas % 12;
horas = horas ? horas : 12;
minutos = minutos < 10 ? '0' + minutos : minutos;

let horaFormateada = horas + ':' + minutos + ' ' + ampm;
console.log(horaFormateada);
