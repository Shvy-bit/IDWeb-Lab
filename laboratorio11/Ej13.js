let seguir;
let descuento;
let total = 0;
let mensaje;
do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    total += precio;
    seguir = confirm("Total a pagar S/." + total.toFixed(2) +
        "\n¿Desea ingresar otro producto?");
} while (seguir);
if (total > 100) {
    descuento = 0.1;
    mensaje = "Tiene un descuento del 10%";
} else if (total >= 50) {
    descuento = 0.05;
    mensaje = "Gana un cupón de 5%";
} else {
    descuento = 0;
    mensaje = "No aplica descuento";
}
alert(mensaje + "\nTotal a pagar: S/." + (total * (1 - descuento)).toFixed(2));