let continuar;
do {
    let dinero = parseFloat(prompt("Ingrese la cantidad de dinero que desea retirar:"));
    if (isNaN(dinero) || dinero <= 0) {
        alert("Por favor, ingrese una cantidad válida mayor que cero.");
        continuar = true;
    } else {
        let resultado = "Para retirar S/." + dinero + ", se entregarán:\n";
        let B100 = Math.floor(dinero / 100);
        dinero %= 100;
        let B50 = Math.floor(dinero / 50);
        dinero %= 50;
        let B20 = Math.floor(dinero / 20);
        dinero %= 20;
        let B10 = Math.floor(dinero / 10);
        dinero %= 10;
        if (B100 > 0) resultado += B100 + " billetes de 100\n";
        if (B50 > 0) resultado += B50 + " billetes de 50\n";
        if (B20 > 0) resultado += B20 + " billetes de 20\n";
        if (B10 > 0) resultado += B10 + " billetes de 10\n";

        alert(resultado);
        continuar = confirm("¿Desea realizar otro retiro?");
    }
} while (continuar);