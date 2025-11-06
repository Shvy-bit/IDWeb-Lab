function Ejercicio3() {
    let precio=parseFloat(prompt("Ingrese el precio(en decimal)"));
    out = "Precio: " + precio;
    out += "\nHacia abajo: "+Math.ceil(precio);
    out += "\nHacia arriba: "+Math.floor(precio);
    alert(out);
}
function Ejercicio4() {
    let min = parseFloat(prompt("Ingresa extremo inferior"));
    let max = parseFloat(prompt("Ingresa extremo superior"));
    alert(`Numero aleatorio entre ${min} y ${max}: ${numeroAleatorio(min,max)}`)
}
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Ejercicio5() {
    let dado1 = numeroAleatorio(1,6);
    let dado2 = numeroAleatorio(1,6);
    alert(
        `Dado 1: ${dado1} \nDado 2: ${dado2} \nSuma de los dados: ${dado1+ dado2}`
    )
}
function Ejercicio6() {
    let numero = parseFloat(prompt("Ingrese un numero: "))
    alert(
        `Cuadrado: ${Math.pow(numero, 2)}
        \nCubo: ${Math.pow(numero, 3)}
        \nRaiz: ${Math.sqrt(numero).toFixed(2)}`
    )
}
function Ejercicio7() {
    let grado = parseFloat(prompt("Ingresa un numero de grados"));
    let radian = gradosARadianes(grado);
    alert(
        `Grado en radianes: ${radian.toFixed(2)}
        \nSeno: ${Math.sin(radian).toFixed(2)}
        \nCoseno: ${Math.cos(radian).toFixed(2)}
        \nGrado: ${radianesAGrados(radian).toFixed(2)}`
    )
}
function gradosARadianes(grado) { return grado * (Math.PI / 180); }
function radianesAGrados(radian) { return radian * (180 / Math.PI); }