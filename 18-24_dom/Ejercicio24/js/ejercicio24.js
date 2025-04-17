// Importación de funciones del módulo colorUtils
import { getRandomColor, isDarkColor } from './colorUtils.js';

const initApp = () => {
    // Referencias a los elementos del DOM
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorCodeDisplay = document.getElementById('colorCode');
    const body = document.body;
    
    // Variable para almacenar el color actual
    let currentColor = { name: "Blanco", value: "#FFFFFF" };
    
    // Función para cambiar el color de fondo
    const changeBackgroundColor = () => {
        // Nuevo color aleatorio
        const newColor = getRandomColor();
        
        // Si el nuevo color es igual al actual, intentamos de nuevo
        if (newColor.value === currentColor.value) {
            return changeBackgroundColor();
        }
        
        currentColor = newColor;
        
        // Cambio del color de fondo del body
        body.style.backgroundColor = currentColor.value;
        
        // Muestra el nombre del nuevo color
        colorCodeDisplay.textContent = `${currentColor.name} (${currentColor.value})`;
        
        // Ajuste del color del texto si el fondo es oscuro
        if (isDarkColor(currentColor.value)) {
            body.classList.add('dark-background');
        } else {
            body.classList.remove('dark-background');
        }
        
        console.log(`Color cambiado a: ${currentColor.name} (${currentColor.value})`);
    };
    
    // Evento 'click' al botón
    changeColorBtn.addEventListener('click', changeBackgroundColor);
};

document.addEventListener('DOMContentLoaded', initApp);