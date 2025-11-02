const arreglo = [-1, 0, 1, 5, -2, -5]

function doblar(numeros) {
    let doble = [];
    numeros.forEach(num => {
        doble.push(num * 2);
    });
    return doble;
}
function Ejercicio3() {
    const resultado = doblar(arreglo);
    alert("Números originales: " + arreglo + "\nNúmeros doblados: " + resultado);
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
    const transformados = filtarYTransformar(arreglo);
    alert("Números originales: " + arreglo + "\nSuma de transformados: " + sumar(transformados));
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
    const resultado = tieneDuplicados(arreglo);
    alert("El arreglo " + arreglo + (resultado ? " tiene " : " no tiene ") + "duplicados.");
}
function Ejericcio8() {
    let productos = new Map();
    productos.set("Manzana", 1.5);
    productos.set("Banana", 0.8);
    productos.set("Naranja", 1.2);
    productos.set("Pera", 1.0);
    let productosStr = "Lista de productos y precios:\n";
    productos.forEach((precio, producto) => {
        productosStr += (producto + ": $" + precio.toFixed(2) + "\n");
    });
    let comprar = confirm(productosStr + "\nDesea comprar?");
    let listaCompras = [];
    while(comprar) {
        let compra = prompt("Ingrese el nombre de un producto:");
        listaCompras.push(compra);
        comprar = confirm("Seguir comprando?");
    }
    let total = 0;
    listaCompras.forEach(item => {
        if (productos.has(item)) {
            total += productos.get(item);
        }
    });
    alert("El precio total de la lista de compras es: $" + total.toFixed(2));
}