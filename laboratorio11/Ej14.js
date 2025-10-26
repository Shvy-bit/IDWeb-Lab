let seguir;
let descuento;
let total = 0;
let mensaje;
let alerta;
let presupuesto = parseFloat(prompt("Ingrese su presupuesto disponible:"));
do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    alerta = presupuesto < total + precio;
    if (!alerta) {
        total += precio;
        seguir = confirm("Usted tiene S/." + presupuesto +
            "\nTotal a pagar S/." + total.toFixed(2) +
            "\n¿Desea ingresar otro producto?");
    } else {
        alert("La última compra fue cancelada por exceder su presupuesto." +
            "\nUsted tiene S/." + presupuesto +
            "\nTotal a pagar S/." + total.toFixed(2) +
            "\nGracias por su compra."
        );
        seguir = false;
    }
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