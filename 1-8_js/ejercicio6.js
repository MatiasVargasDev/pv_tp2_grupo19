console.clear()

/*
 *Crear un array denominado edades con al menos 8 edades distintas.
 *Recorrer el array y obtener el promedio de las edades del array.
*/

const edades = [18, 25, 30, 22, 28, 35, 40, 45]
let suma = edades.reduce((acumulador, edad) => acumulador + edad, 0)

// Calcular el promedio
const promedio = suma / edades.length

console.log(`Las edades son: ${edades.join(',')}`)
console.log(`El promedio de las edades es: ${promedio.toFixed(0)}`)
