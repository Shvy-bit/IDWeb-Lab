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
function Ejercicio8() {
    let contraseña = "";
    for (let i = 0; i < 6; i++) {
        contraseña += numeroAleatorio(0, 9);
    }
    alert("Contrasña: " + contraseña);
}
function Ejercicio9() {
    let x1 = parseFloat(prompt("Ingresa x1:"));
    let y1 = parseFloat(prompt("Ingresa y1:"));
    let x2 = parseFloat(prompt("Ingresa x2:"));
    let y2 = parseFloat(prompt("Ingresa y2:"));
    let d1 = parseFloat(distanciaEntre(0, 0, x1, y1));
    let d2 = parseFloat(distanciaEntre(0, 0, x2, y2));
    alert(`Distancia entre puntos: ${distanciaEntre(x1, y1, x2, y2)}` +
            `\nSuma de distancias: ${d1 + d2}`);
}
function distanciaEntre(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);
}