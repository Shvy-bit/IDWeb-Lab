function Ejercicio3() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es par:"));
    if (esPar(numero)) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}function esPar(numero) {
    return numero % 2 === 0;
}
function Ejercicio4() {
    let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
    alert("El área del rectángulo es: " + areaRectangulo(base, altura).toFixed(2));
}
function areaRectangulo(base, altura) {
    return base * altura;
}
function Ejercicio5() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    if (esMultiplo(numero1, numero2)) {
        alert(numero1 + " es múltiplo de " + numero2);
    } else {
        alert(numero1 + " no es múltiplo de " + numero2);
    }
}
function esMultiplo(num1, num2) {
    return num1 % num2 === 0;
}
function Ejercicio6() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    alert("El mayor de los tres números es: " + mayorDeTres(numero1, numero2, numero3));
}
function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const promedio = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
function Ejercicio7() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    alert("El promedio de las notas es: " + promedio(nota1, nota2, nota3).toFixed(2));
}
const STR = function(str) {
    return str.toUpperCase();
}
function Ejercicio8() {
    let texto = prompt("Ingrese un texto para convertir a mayúsculas:");
    alert("El texto en mayúsculas es: " + STR(texto));
}
const descuento = function(precio, porcentaje) {
    return precio * (1 - (porcentaje / 100));
}
function Ejercicio9() {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
    alert("El precio con descuento es: " + descuento(precio, porcentaje).toFixed(2));
}
const saludo = (nombre) => {
    return `¡Hola, ${nombre}!`;
}
function Ejercicio10() {
    let nombre = prompt("Ingrese su nombre:");
    alert(saludo(nombre));
}