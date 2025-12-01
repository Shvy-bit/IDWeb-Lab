export function sumar(x, y) {
    return x + y;
}
export function restar(x, y) {
    return x - y;
}
export function multiplicar(x, y) {
    return x * y;
}
export function dividir(x, y) {
    if (y === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return x / y;
}