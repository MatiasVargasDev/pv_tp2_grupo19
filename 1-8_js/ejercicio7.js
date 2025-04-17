console.clear()

/*
 * Declarar un array denominado nombres con al menos 6 nombres.
 * Obtener el nombre más largo del array nombres.
 * Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
 * que indica su tamaño.
*/

const NOMBRES = ['María', 'Pedro', 'Ana', 'José', 'Isabel', 'Maximiliano'];
const NOMBRE_MAS_LARGO = NOMBRES.reduce((a, b) => a.length > b.length ? a : b);

console.log(`El nombre más largo es: ${NOMBRE_MAS_LARGO}`);
