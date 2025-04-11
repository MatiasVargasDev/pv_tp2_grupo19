const myarray = [18.0,25.0,30.0,80.0];
let long = myarray.length;
console.log(long); //para saber la longitud del array
let acumulador = 0;
for (let i = 0; i != long; i++) {
  
    acumulador = acumulador + myarray[i];
}
acumulador= acumulador / long; //para saber el promedio de los elementos del array
console.log(acumulador); //para saber el promedio de los elementos del array