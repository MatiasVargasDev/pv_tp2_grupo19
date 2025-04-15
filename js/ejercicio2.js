console.clear()

/*
 * Mostrar por consola los primeros 10 números pares.
*/

pareNumbers = [];

for (let i = 1; i < 25; i++) {
  pareNumbers[i] = 2 * i;
  if (i === 11) {
    break;
  }
  console.log(pareNumbers[i]);
}
