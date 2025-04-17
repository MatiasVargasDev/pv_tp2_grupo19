// Esta función verifica si el texto excede un límite de caracteres o no
export const exceedsCharLimit = (text, limit) => {
    return text.length > limit;
};

// Esta función retorna el número de caracteres en un texto
export const countCharacters = (text) => {
    return text.length;
};