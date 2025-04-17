// Seleccionamos todos los radio buttons
const radios = document.querySelectorAll('input[name="lenguaje"]');//seleccionamos todos los radio buttons que tengan el nombre "lenguaje"

// Seleccionamos el elemento donde mostrar el resultado
const resultado = document.getElementById('resultado');


for (let i = 0; i < radios.length; i++) {
  // Agregamos un listener al evento change
  radios[i].addEventListener('change', function() {
    // Obtenemos el valor del radio button seleccionado
    let seleccionado = this.value; // "this" se refiere al radio button que activo el evento
    // Actualizamos el texto del resultado
    resultado.textContent = 'Lenguaje seleccionado: ' + seleccionado; // Concatenación manual
    // Mostramos el resultado en la consola
    console.log('Seleccionaste: ' + seleccionado);
  });
}