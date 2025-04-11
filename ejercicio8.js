

//mejoras posibles contemplar el numero negativos  y controlar que el usuario ingrese un numero
function calcularMayor(num1, num2) { // función para calcular el mayor de dos números
  let num_mayor = 0;

  if (num1 > num2) {
    num_mayor = num1;
  } else if (num2 > num1) {
    num_mayor = num2;
  } else {
    num_mayor = -1;
  }
  return Number(num_mayor);
}
//promt pedir un valor al usuario
//prompt devuelve un strin por eso se usa parseInt
//parseInt convierte el valor a un numero entero

valor1 = parseInt(prompt("Ingrese el primer número: "));
valor2 = parseInt(prompt("Ingrese el segundo número: "));

if(calcularMayor(valor1, valor2) == -1){
    alert("Los números son iguales")
}else{    
    alert("El número mayor es: " + calcularMayor(valor1, valor2));
}
