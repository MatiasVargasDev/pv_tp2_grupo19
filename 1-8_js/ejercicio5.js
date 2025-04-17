console.clear()

/*
 *Declarar dos variables denominadas horas, minutos, asignar valores a cada una y
 *realizar la conversión para expresar esas horas y minutos en segundos. Mostrar por consola
 *las horas y minutos, luego el resultado de la conversión en segundos.
 */

const horas = 2
const minutos = 30
const conversionSegundos = (horas * 3600) + (minutos * 60)

console.log(`Horas: ${horas}`)
console.log(`Minutos: ${minutos}`)
console.log(`Total conversion en segundos: ${conversionSegundos}`)
