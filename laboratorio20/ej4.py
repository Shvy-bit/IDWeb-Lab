sueldoMensual = float(input("Ingrese el ingreso mensual: "))
sueldoAnual = sueldoMensual * 14
impuestoTotal = 0
print(f"Sueldo anual: {sueldoAnual}")
tramos = [(20000, 0.0), (50000, 0.1), (100000, 0.2), (float('inf'), 0.3)]
limiteInferior = 0
for limiteSuperior, tasa in tramos:
    if sueldoAnual > limiteInferior:
        montoGravable = min(sueldoAnual, limiteSuperior) - limiteInferior
        impuestoTramo = montoGravable * tasa
        impuestoTotal += impuestoTramo
        print(f"Impuesto para el tramo [{limiteInferior} - {limiteSuperior}]: {impuestoTramo}")
        limiteInferior = limiteSuperior
    else:
        break
tasaEfectiva = (impuestoTotal / sueldoAnual) * 100
print(f"Total de impuestos: {impuestoTotal}")
print(f"Tasa efectiva real: {tasaEfectiva:.2f}%")
