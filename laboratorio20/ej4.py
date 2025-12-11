"""
Ingresar el ingreso mensual. El ingreso anual es 12 ingresos mensuales mas 2 aguinaldos que son un sueldo completo.
Calcular el impuesto aplicando tramos progresivos, por ejemplo:
Rango Tasa
[0 – 20000] 0%
<20000 – 50000] 10%
<50000 – 100000] 20%
Mayor a 100000 30%
El impuesto se calcula por tramo, no tomando la tasa completa sobre el total.
Ejemplo con sueldo mensual de 5000 (anual sería 70000)
[0 – 20000] → 0
<20000 – 50000] → 30,000 × 10% = 3000
<50000 - 70000 → 20,000 × 20% = 4000
Total impuesto = 7,000
El programa debe mostrar:
• Impuesto por tramo
• Total de impuestos
• Tasa efectiva real (impuesto / ingreso) × 100 en %

"""
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
