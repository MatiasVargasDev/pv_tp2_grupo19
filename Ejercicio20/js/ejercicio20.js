
function  cambiarCapitales(a) {
  let pais = a; 
  let capital;
  switch (pais) { 
    case 'Argentina':
      capital = 'Buenos Aires';
      break;
    case 'Chile':
      capital = 'Santiago';
      break;
    case 'Colombia':
      capital = 'Bogotá';
      break;
    case 'Peru':
      capital = 'Lima';
      break;
    case 'Paraguay':
      capital = 'Asunción';
      break;
    case 'Uruguay':
      capital = 'Montevideo';
      break;
    default:
      capital = 'No se ha seleccionado un país válido.';
  }


  const selectCapital = document.getElementById('capital');
  selectCapital.innerHTML = ''; // Limpia las opciones previas
  const option = document.createElement('option');
  option.value = capital;
  option.textContent = capital;
  selectCapital.appendChild(option);
  
  console.log('La capital de ' + pais + ' es ' + capital); // Muestra la capital en la 

}

