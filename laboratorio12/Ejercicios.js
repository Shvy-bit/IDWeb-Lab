function Ejercicio1() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es par:"));
    if (esPar(numero)) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}function esPar(numero) {
    return numero % 2 === 0;
}
function Ejercicio2() {
    let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
    alert("El área del rectángulo es: " + areaRectangulo(base, altura).toFixed(2));
}
function areaRectangulo(base, altura) {
    return base * altura;
}
function Ejercicio3() {
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