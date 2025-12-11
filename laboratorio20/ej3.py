salarioBase = 1050
horasExtras = 5
pagoHoraExtra = 10
bono = 100
afp = 18
seguroSalud = 5
descuentoGeneral = (salarioBase * afp/100) + (salarioBase * seguroSalud/100)
salarioNeto = salarioBase + (horasExtras * pagoHoraExtra) + bono - descuentoGeneral
print(f"Salario bruto: {salarioBase} + {bono}")
print(f"Descuentos totales: {descuentoGeneral}")
print(f"Salario neto: {salarioNeto}")