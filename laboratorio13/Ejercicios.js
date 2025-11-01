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
function reordenarPalabras(oracion) {
    let palabras = [];
    palabras = oracion.split(" ");
    palabras.sort();
    let reordenadas = [];
    palabras.forEach(str => {
        reordenadas.push(str.toUpperCase());
    });
    return reordenadas;
} 
function Ejercicio5() {
    let oracion = prompt("Ingrese una oración:");
    alert("Palabras reordenadas: " + reordenarPalabras(oracion));
}
function Ejercicio6() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de nombres que va a ingresar:"));
    let nombres = [];
    while (nombres.length < cantidad) {
        let nombre = prompt("Ingrese un nombre:");
        nombres.push(nombre);
    }
    let nombresSet = new Set(nombres);
    nombresSet = Array.from(nombresSet);
    alert("Nombres únicos ingresados: " + nombresSet);
}
function tieneDuplicados(arreglo) {
    let conjunto = new Set(arreglo);
    return conjunto.size !== arreglo.length;
}
function Ejercicio7() {
    const arreglo = [1, 2,3 , 4, 5, 3];
    const resultado = tieneDuplicados(arreglo);
    alert("El arreglo " + arreglo + (resultado ? " tiene " : " no tiene ") + "duplicados.");
}
function Ejericcio8() {
    let productos = new Map();
    productos.set("Manzana", 1.5);
    productos.set("Banana", 0.8);
    productos.set("Naranja", 1.2);
    productos.set("Pera", 1.0);
    let productosStr = "";
    productos.forEach((precio, producto) => {
        productosStr += (producto + ": $" + precio.toFixed(2) + "\n");
    });
    let listaCompras = [];
    let total = 0;
    let opcion = confirm.prompt("Lista de productos y precios:\n" + productosStr + "Desea comprar?");
    if(opcion) {
        let compra = prompt("Ingrese el nombre de un producto:");
        listaCompras.push(compra);
    }
    listaCompras.forEach(item => {
        if (productos.has(item)) {
            total += productos.get(item);
        }
    });
    alert("El precio total de la lista de compras es: $" + total.toFixed(2));
}