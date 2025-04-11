
let acumulador = 0;
for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        acumulador++;
        console.log(i + " es par");
    }
    if (acumulador != 0) {
    console.log( "numero de pares = " + acumulador);   
    }
}