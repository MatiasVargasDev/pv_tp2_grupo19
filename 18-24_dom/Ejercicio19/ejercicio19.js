// Importación de funciones desde el módulo formUtils.js
import { getInputValue, isEmpty, buildStudentMessage } from './formUtils.js';

// Para inicializar 
const initApp = () => {
    // Se toman los datos de los inputs
    const nombreInput = document.querySelector('#nombre');
    const apellidoInput = document.querySelector('#apellido');
    const libretaInput = document.querySelector('#libreta');
    const submitBtn = document.querySelector('#submitBtn');
    
    // Función para mostrar los datos del estudiante
    const mostrarDatosEstudiante = () => {
        const nombre = getInputValue(nombreInput);
        const apellido = getInputValue(apellidoInput);
        const libreta = getInputValue(libretaInput);
        
        // Para verificar que los campos no estén vacíos
        if (isEmpty(nombre) || isEmpty(apellido) || isEmpty(libreta)) {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        // Construcción del mensaje
        const mensaje = buildStudentMessage(nombre, apellido, libreta);
        alert(mensaje);
        
        console.log('Datos del estudiante:', { nombre, apellido, libreta });
    };
    
    // Evento click al botón
    submitBtn.addEventListener('click', mostrarDatosEstudiante);
    
};

document.addEventListener('DOMContentLoaded', initApp);