function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function aplicarGradiente(color) {
  const color1 = color();
  const color2 = color();
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  console.log(`Gradiente aplicado: ${color1} → ${color2}`);
}

document.getElementById('cambiarColor').addEventListener('click', aplicarGradiente(colorAleatorio));
