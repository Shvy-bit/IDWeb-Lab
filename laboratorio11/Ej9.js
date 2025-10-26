let continuar;
do {
    let rango = parseInt(prompt("Ingrese un número entero positivo para sumar los números desde 1 hasta N (omitiendo múltiplos de 5):"));
    if (isNaN(rango) || rango < 1) {
        alert("Por favor, ingrese un número entero positivo válido.");
    } else {
        let suma = 0;
        for (let num = 1; num <= rango; num++) {
            if (num % 5 !== 0) {
                suma += num;
            }
        }
        alert("La suma de los números desde 1 hasta " + rango + " (omitiendo múltiplos de 5) es: " + suma);
        continuar = confirm("¿Desea ingresar otro número?");
    }
} while (continuar);