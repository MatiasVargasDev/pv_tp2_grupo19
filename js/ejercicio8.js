console.clear()

/*
 * Declarar una función con nombre calcularMayor() y pasarle como
 * parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los
 * números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un
 * alert también.
 *
 * Invocar la función y enviar los argumentos con diferentes números para probar.
*/

const calcularMayor = (a, b) => {
  if (![a, b].every(n => typeof n === 'number')) {
    return console.log('Por favor, ingrese solo números válidos.')
  }

  if (a === b) return console.log('Los números son iguales.')
  console.log(`El número mayor es: ${Math.max(a, b)}`)
}

calcularMayor(5, 10);
calcularMayor(11, 5);
calcularMayor(5, 5);
