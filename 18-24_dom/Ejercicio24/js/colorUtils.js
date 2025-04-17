// Arreglo de colores predefinidos (nombres y valores hexadecimales)
const predefinedColors = [
    { name: "Rojo", value: "#FF5252" },
    { name: "Verde", value: "#4CAF50" },
    { name: "Azul", value: "#2196F3" },
    { name: "Amarillo", value: "#FFEB3B" },
    { name: "Púrpura", value: "#9C27B0" },
    { name: "Naranja", value: "#FF9800" },
    { name: "Rosa", value: "#E91E63" },
    { name: "Turquesa", value: "#00BCD4" }
];

// Obtiene un color aleatorio del arreglo de colores
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    
    return predefinedColors[randomIndex];
};

export const isDarkColor = (hexColor) => {
    // Eliminamos el # si existe
    const hex = hexColor.replace('#', '');
    
    // Converción del color hex a RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculo de la luminocidad
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Si la luminosidad es menor a 0.5, se considera que el color es oscuro
    return luminance < 0.5;
};