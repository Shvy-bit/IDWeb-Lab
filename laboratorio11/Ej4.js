let edad = parseFloat(prompt("Ingrese su edad:"));
let edadRelativa;
if (edad < 12) edadRelativa = "niño";
else if (edad >= 12 && edad < 18) edadRelativa = "adolescente";
else if (edad >= 18 && edad < 60) edadRelativa = "adulto";
else edadRelativa = "adulto mayor";
alert("Usted es un " + edadRelativa);