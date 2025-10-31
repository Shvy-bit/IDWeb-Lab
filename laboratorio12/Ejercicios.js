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
