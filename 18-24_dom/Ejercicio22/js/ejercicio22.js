// Importación de funciones del módulo textUtils
import { exceedsCharLimit, countCharacters } from './textUtils.js';

const CHAR_LIMIT = 20;

const initApp = () => {
    // Referencias de los elementos del DOM
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');
    const charCounter = document.querySelector('.character-counter');
    
    // Función para actualizar el texto de salida
    const updateOutputText = (text) => {
        textOutput.textContent = text.length > 0 ? text : 'Aquí aparecerá el texto...';
        
        const charCount = countCharacters(text);
        charCounter.textContent = `${charCount} caracteres`;
        
        if (exceedsCharLimit(text, CHAR_LIMIT)) {
            // Clase para cambiar el color
            textOutput.classList.add('text-long');
        } else {
            // Si no supera el límite, quitamos la clase
            textOutput.classList.remove('text-long');
        }
    };
    
    // Se añade el evento 'input' al campo de texto
    textInput.addEventListener('input', (event) => {
        // Texto actual del campo
        const currentText = event.target.value;
        
        updateOutputText(currentText);
    });
    
    // Inicializacón con texto vacío
    updateOutputText('');
};

// Ejecutamos la función de inicialización cuando se carga el documento
document.addEventListener('DOMContentLoaded', initApp);