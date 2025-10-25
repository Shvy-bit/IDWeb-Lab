let num
let impar = 0
let par = 0
let i = 0;
while (i < 10) {
    num = parseInt(prompt("Ingrese un numero: "))
    if (num % 2 == 0) {
        par++
    } else {
        impar++
    }
    i++
}
alert("Cantidad de numeros pares: " + par + "\nCantidad de numeros impares: " + impar)