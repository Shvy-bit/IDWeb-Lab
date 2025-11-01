function doblar(numeros) {
    let doble = [];
    numeros.forEach(num => {
        doble.push(num * 2);
    });
    return doble;
}
function Ejercicio3() {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = doblar(numeros);
    alert("Números originales: " + numeros + "\nNúmeros doblados: " + resultado);
}
function sumar(numeros) {
    let suma = 0;
    numeros.forEach(num => {
        suma += num;
    });
    return suma;
}
function filtarYTransformar(numeros) {
    let resultado = [];
    numeros.forEach(num => {
        if (num >= 0) {
            resultado.push(num ** 2);
        }
    });
    return resultado;
}
function Ejercicio4() {
    const numeros = [1, -2, 3, -4, 5];
    const transformados = filtarYTransformar(numeros);
    alert("Números originales: " + numeros + "\nSuma de transformados: " + sumar(transformados));
}
