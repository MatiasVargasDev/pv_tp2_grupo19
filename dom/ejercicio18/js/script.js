// Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css.
// Crear un script que capture el evento clic del botón y que cambie el texto del párrafo
// por otro.

const NEW_PARRAFO = "Unju - Clase de Programación Visual - Comision 3"

const $boton = document.getElementById("btn")
const $parrafo = document.getElementById("parrafo")

$boton.addEventListener("click", () => {
  $parrafo.textContent = NEW_PARRAFO
})
