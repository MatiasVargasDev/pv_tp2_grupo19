const $radios = document.querySelectorAll('input[name="lenguaje"]');
const $resultado = document.getElementById('resultado');

$radios.forEach(radio => {
  radio.addEventListener('change', () => {
    $resultado.textContent = `Lenguaje seleccionado: ${radio.value}`;
    console.log(`Seleccionaste: ${radio.value}`);
  });
});
