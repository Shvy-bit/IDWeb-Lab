let salio;
do {
    let opcion = prompt("Ingrese una opción:\n" +
        "1. Calcular estadisticas de N notas\n" +
        "2. Contar números pares e impares de un rango\n" +
        "3. Generar una tabla de multiplicar\n" +
        "4. Salir"
    );
    switch (opcion) {
        case '1':
            let continuar = true;
            while (continuar) {
                let opcionesNotas = prompt("Que desea calcular:\n" +
                    "1. Promedio\n" +
                    "2. Valor máximo\n" +
                    "3. Valor mínimo\n" +
                    "4. Cantidad de pares e impares\n" +
                    "5. Cuántos estan por encima del promedio\n" +
                    "6. Regresar al menú principal"
                );
                if (opcionesNotas === '6') {
                    continuar = false;
                    break;
                }
                let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a procesar:"));
                let notas = [];
                for (let i = 1; i <= cantidadNotas; i++) {
                    let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
                    notas.push(nota);
                }
                switch (opcionesNotas) {
                    case '1':
                        let suma = notas.reduce((acc, val) => acc + val, 0);
                        let promedio = suma / cantidadNotas;
                        alert("El promedio es: " + promedio);
                        break;
                    case '2':
                        let maximo = Math.max(...notas);
                        alert("El valor máximo es: " + maximo);
                        break;
                    case '3':
                        let minimo = Math.min(...notas);
                        alert("El valor mínimo es: " + minimo);
                        break;
                    case '4':
                        let pares = notas.filter(nota => nota % 2 === 0).length;
                        let impares = cantidadNotas - pares;
                        alert("Cantidad de pares: " + pares + "\nCantidad de impares: " + impares);
                        break;
                    case '5':
                        let sumaNotas = notas.reduce((acc, val) => acc + val, 0);
                        let prom = sumaNotas / cantidadNotas;
                        let porEncima = notas.filter(nota => nota > prom).length;
                        alert("Cantidad de notas por encima del promedio: " + porEncima);
                        break;
                    default:
                        alert("Opción inválida. Por favor, intente de nuevo.");
                }
            }
            break;
        case '2':
            let inicio = parseInt(prompt("Ingrese el número de inicio del rango:"));
            let fin = parseInt(prompt("Ingrese el número de fin del rango:"));
            let paresCount = 0;
            let imparesCount = 0;
            for (let num = inicio; num <= fin; num++) {
                if (num % 2 === 0) paresCount++;
                else imparesCount++;
            }
            alert("Cantidad de números pares: " + paresCount + "\nCantidad de números impares: " + imparesCount);
            break;
        case '3':
            let numeroTabla = parseInt(prompt("Ingrese el número para generar la tabla de multiplicar:"));
            let tabla = "Tabla de multiplicar del " + numeroTabla + ":\n";
            for (let i = 1; i <= 12; i++) {
                tabla += numeroTabla + " x " + i + " = " + (numeroTabla * i) + "\n";
            }
            alert(tabla);
            break;
        case '4':
            salio = true;
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opción inválida. Por favor, intente de nuevo.");
    }
} while (!salio);