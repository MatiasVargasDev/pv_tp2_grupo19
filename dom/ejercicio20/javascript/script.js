const PAISCAPITALMAP = {
  "Argentina": "Buenos Aires",
  "Brasil": "Brasilia",
  "Chile": "Santiago",
  "Uruguay": "Montevideo",
  "Perú": "Lima",
  "México": "Ciudad de México"
};

const paisSelect = document.querySelector("#pais");
const capitalSelect = document.querySelector("#capital");

// Evento cuando cambia el país
paisSelect.addEventListener("change", () => {
  const paisSeleccionado = paisSelect.value;
  const capital = PAISCAPITALMAP[paisSeleccionado];

  // Limpia las opciones anteriores
  capitalSelect.innerHTML = "";

  if (capital) {
    // Agrega la opción correspondiente
    const opcion = document.createElement("option");
    opcion.value = capital;
    opcion.textContent = capital;
    capitalSelect.appendChild(opcion);

    console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capital}`);
  } else {
    // Si no hay país seleccionado
    const opcion = document.createElement("option");
    opcion.value = "";
    opcion.textContent = "-- Seleccioná una capital --";
    capitalSelect.appendChild(opcion);
  }
});
