console.log("JavaScript funciona");
let nombre = "Yesy";
console.log(nombre);
if (nombre === "Yesy") {
    console.log("El if funciona");
}
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}
let contador = 1;
while (contador <= 3) {
    console.log("Contador: " , contador);
    contador++;
}
let opción = 2;
switch (opción) {
    case 1:
        console.log("Opción 1 seleccionada");
        break;
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    default:
        console.log("Opción no válida");
}
function  saludar() {
    console.log("Hola, desde una funcion");
}
saludar();
let frutas = ["manzana", "mango", "fresa"];
console.log(frutas);
console.log(frutas[1]);
frutas.push("piña");
console.log("Cantidad después de push:", frutas.length);
console.log(frutas);
frutas.pop();
console.log(frutas);
console.log("Cantidad final:", frutas.length);
let número = 1;
do {
    console.log("Do while:", número);
    número++;   
} while (número <= 3);
let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad") 
}
let nota = 85;
if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else {
    console.log("Calificación: C o menor");
}
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
        case 2:
            console.log("Martes");
            break;
            case 3:
                console.log("Miercoles");
                break;
                default:
                    console.log("Día no valido");
}
for (let i = 1; i <= 5; i++) {
    console.log("Interación:" , i)
}
let contadorWhile = 1;
 while (contadorWhile <= 3) {
    console.log("While" , contadorWhile);
    contadorWhile++;
 }
 console.log("Fin del ciclo while");
 let numero = 1;
 do {
    console.log("Número: " + numero);
    numero++;
 } while (numero <= 5);
 console.log("Fin del ciclo do while");
 function saludar() {
    console.log("Hola desde una función");
 }
 saludar();
 function sumar(a, b) {
    return a + b;
 }
let resultado = sumar(5, 3);
console.log("Resultado de la suma:" , resultado);
function mostrarMensaje(mensaje) {
console.log(mensaje); 
 }
mostrarMensaje("JavaScript funciona correctamente");
 