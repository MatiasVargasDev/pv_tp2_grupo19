
document.querySelector('#formulario').addEventListener('submit', (e) => {
  e.preventDefault();

  const $formulario = document.querySelector('#formulario');
  const $nombre = document.querySelector('#nombre');
  const $apellido = document.querySelector('#apellido');
  const $libreta = document.querySelector('#libreta');

  alert(`Los datos ingresado son:\nNombre: ${$nombre.value}\nApellido: ${$apellido.value}\nLibreta: ${$libreta.value}`)

  $formulario.reset()
})


