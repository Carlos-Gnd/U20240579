const fecha1 = new Date('2024-09-15');
const fecha2 = new Date('2024-09-23');

const diferenciaMilisegundos = fecha2 - fecha1;
const milisegundosPorDia = 1000 * 60 * 60 * 24;
const diferenciaDias = diferenciaMilisegundos / milisegundosPorDia;

console.log(`La diferencia en días entre las dos fechas es: ${diferenciaDias} días`);