export const getInputValue = (inputElement) => {
    return inputElement.value.trim();
};


export const isEmpty = (value) => {
    return value === '';
};


export const buildStudentMessage = (nombre, apellido, libreta) => {
    return Nombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta};
};