let continuar;
do {
    let rango = parseInt(prompt("Ingrese un número entero positivo para ver los numeros primos entre 1 y N:"));
    if (isNaN(rango) || rango < 1) {
        alert("Por favor, ingrese un número entero positivo válido.");
    } else {
        let mensaje = "Números primos entre 1 y " + rango + ":\n2";
        for (let num = 3; num <= rango; num++) {
            let esPrimo = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) mensaje += ", " + num;
        }
        mensaje += ".";
        alert(mensaje);
        continuar = confirm("¿Desea ingresar otro número?");
    }
} while (continuar);