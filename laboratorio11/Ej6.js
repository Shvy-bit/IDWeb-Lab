let continuar = true;
let numero;
let mensaje;
while (continuar)  {
    let numero = parseInt(prompt("Ingrese un numero:"));
    mensaje = "La tabla de multiplicar del " + numero + " es:\n";
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        mensaje += numero + " x " + i + " = " + resultado + "\n";
    }
    alert(mensaje);
    continuar = confirm("¿Desea ver la tabla de otro número?");
}