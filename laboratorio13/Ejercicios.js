const arreglo = [-1, 0, 1, 5, -2, -5]
const mapaModelo = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"],
    ["Argentina", "Buenos Aires"]
]);
function mapaToString(mapa) {
    out = "";
    mapa.forEach((val, clave) => {
        out += clave + " => " + val + "\n";
    });
    return out;
}
function pedirOracion () {
    return prompt("Ingrese una oracion:");
}

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
    let oracion = pedirOracion();
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
function Ejercicio8() {
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
function Ejercicio9() {
    let oracion = pedirOracion();
    let contador = contarPalabras(oracion);
    let out = "Contador de palabras: \n";
    alert(out + mapaToString(contador));
}
function contarPalabras(str) {
    let palabras = [];
    palabras = str.split(" ");
    let mapa = new Map();
    palabras.forEach(palabra => {
        if(palabra === "") return;
        palabra = palabra.toLowerCase();
        if (!mapa.has(palabra)) mapa.set(palabra, 1);
        else mapa.set(palabra, mapa.get(palabra) + 1);
    });
    return mapa;
}
function Ejercicio10() {
    let mapaInvertido = invertirMap(mapaModelo);
    alert("Mapa original :\n" + mapaToString(mapaModelo));
    alert("Mapa invertido: \n" + mapaToString(mapaInvertido));
}
function invertirMap(mapa) {
    let out = new Map();
    mapa.forEach((val, clave) => {
        out.set(val,clave);
    });
    return out;
}
//Ejercicio 11
let auto = {
  marca: "Ford",
  modelo: "Mustang",
  año: 1969,
  detalles: function() {
return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`;
  }
};
function Ejercicio11() {
    alert(auto.detalles());
}
function Ejercicio12() {
    let palabra = prompt("Ingrese una palabra");
    let contador = contarLetras(palabra);
    alert("Letras:\n" + mapaToString(contador));
}
function contarLetras(str) {
    str = str.toLowerCase();
    let caracteres = str.split('');
    let out = new Map();
    caracteres.forEach(char => {
        if(!out.has(char)) out.set(char, 1);
        else out.set(char, out.get(char) + 1);
    });
    return out;
}