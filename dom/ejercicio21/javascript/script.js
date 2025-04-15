const $input = document.querySelector("#inputTexto");
const $out = document.querySelector("#mostrarTexto");

$input.addEventListener("input", () => {
  $out.textContent = $input.value;
})
