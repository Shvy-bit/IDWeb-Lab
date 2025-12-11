def normalizar(lista, modo):
    if modo == 'min-max':
        min_val = min(lista)
        max_val = max(lista)
        return [(x - min_val) / (max_val - min_val) for x in lista]
    elif modo == 'z-score':
        mean = sum(lista) / len(lista)
        variance = sum((x - mean) ** 2 for x in lista) / len(lista)
        std_dev = variance ** 0.5
        return [(x - mean) / std_dev for x in lista]
    elif modo == 'unit':
        norm = sum(x ** 2 for x in lista) ** 0.5
        return [x / norm for x in lista]
    else:
        raise ValueError("Modo de normalización no reconocido")
lista_numeros = [float(x) for x in input("Ingrese una lista de números separados por espacios: ").split()]
modo_normalizacion = input("Ingrese el modo de normalización (min-max, z-score, unit): ")
try:
    lista_normalizada = normalizar(lista_numeros, modo_normalizacion)
    print("Lista normalizada:", lista_normalizada)
except ValueError as e:
    print(e)
