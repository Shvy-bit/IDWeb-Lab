let continuar;
do {
    let num = parseInt(prompt("Ingrese un número entero positivo para verificar si es un número Armstrong:"));
    if (isNaN(num) || num < 0) {
        alert("Por favor, ingrese un número entero positivo válido.");
    } else {
        let numStr = num.toString();
        let n = numStr.length;
        let suma = 0;
        for (let i = 0; i < n; i++) {
            let digito = parseInt(numStr.charAt(i));
            suma += digito ** n;
        }
        if (suma === num) alert(num + " es un número Armstrong.");
        else alert(num + " no es un número Armstrong.");
        continuar = confirm("¿Desea ingresar otro número?");
    }
} while(continuar);
