let continuar = true;
do {
    let opcion = parseInt(prompt("Seleccione una opción:" +
                "\n1. Calcular el área de un círculo" +
                "\n2. Calcular el área de un rectangulo" +
                "\n3. Salir"));
    let valido = false;
    switch (opcion) {
        case 1:
            while (!valido) {
                let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
                if (isNaN(radio) || radio <= 0) {
                    alert("Por favor, ingrese un número válido mayor que cero para el radio.");
                } else {
                    let area = Math.PI * radio ** 2;
                    alert("El área del círculo con radio " + radio + " es: " + area.toFixed(2));
                    valido = true;
                }
            }
            break;
        case 2:
            while (!valido) {
                let alto = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
                if (isNaN(alto) || alto <= 0 || isNaN(ancho) || ancho <= 0) {
                    alert("Por favor, ingrese números válidos mayores que cero para la altura y el ancho.");
                } else {
                    let area = alto * ancho;
                    alert("El área del rectángulo con altura " + alto + " y ancho " + ancho + " es: " + area.toFixed(2));
                    valido = true;
                }
            }
            break;
        case 3:
            alert("Saliendo del programa.");
            continuar = false;
            break;
        default:
            alert("Opción no válida. Por favor, seleccione 1, 2 o 3.");
    }
} while (continuar);