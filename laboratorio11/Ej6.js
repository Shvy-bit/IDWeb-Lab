let numero = parseInt(prompt("Ingrese un numero:"));
let mensaje = "La tabla de multiplicar del " + numero + " es:\n";
for (let i = 1; i <= 12; i++) {
    let resultado = numero * i;
    mensaje += numero + " x " + i + " = " + resultado + "\n";
}
alert(mensaje);