let suma = 0;
let nota
let i = 0;
do {
    nota = parseFloat(prompt("Ingrese una nota entre 0 y 20:"));
    if (nota >= 0 && nota <= 20) {
        suma += nota;
        i++;
    } else {
        alert("Nota inválida. Por favor, ingrese una nota entre 0 y 20.");
    }
} while (i < 5);
let promedio = suma / 5;
alert("El promedio de las notas ingresadas es: " + promedio);
