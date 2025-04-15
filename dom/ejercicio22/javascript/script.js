const input = document.querySelector('#inputTexto');
const output = document.querySelector('#mostrarTexto');

input.addEventListener('input', () => {
  const texto = input.value;
  output.textContent = texto;

  if (texto.length > 20) {
    output.classList.add('resaltado');
  } else {
    output.classList.remove('resaltado');
  }
});
