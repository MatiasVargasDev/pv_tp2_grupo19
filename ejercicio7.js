const names = ['Matias', 'Juan', 'Pedro', 'Maria', 'Jose', 'Ana'];
let indx = 0; // guardara mi inidice de la cadena mas larga
let max = -999; // inicializo max en un numero muy bajo para que cualquier cadena lo supere
for (let i = 0; i < names.length; i++) {

    //console.log(names[i].length); //para control de debugging
    //console.log(max); //para control de debugging
    if (names[i].length > max) {
        indx = i; 
        max = names[i].length; // 6
    }
    
}

console.log('La cadena mas larga es ' + names[indx]); 


