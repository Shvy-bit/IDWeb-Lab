def generar_matriz_espiral(N):
    matriz = [[0] * N for _ in range(N)]
    num = 1
    capa = 0
    while num <= N * N:
        for i in range(capa, N - capa):
            matriz[capa][i] = num
            num += 1
        for i in range(capa + 1, N - capa):
            matriz[i][N - capa - 1] = num
            num += 1
        for i in range(N - capa - 2, capa - 1, -1):
            matriz[N - capa - 1][i] = num
            num += 1
        for i in range(N - capa - 2, capa, -1):
            matriz[i][capa] = num
            num += 1
        capa += 1
    return matriz
def imprimir_matriz(matriz):
    for fila in matriz:
        print(" ".join(f"{num:3d}" for num in fila))
while True:
    try:
        N = int(input("Ingrese un número entero N: "))
        if N >= 3:
            break
        else:
            print("El número debe ser mayor o igual a 3. Intente de nuevo.")
    except ValueError:
        print("Entrada inválida. Por favor, ingrese un número entero.")
matriz_espiral = generar_matriz_espiral(N)
imprimir_matriz(matriz_espiral)
