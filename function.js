

function calcular(){
    numeros = document.getElementById("numeros").value.split(",")
    suma = 0;
    maximo = Number.MIN_SAFE_INTEGER
    minimo = Number.MAX_SAFE_INTEGER

    for(i = 0; i < numeros.length; i++) {
        numero = Number(numeros[i])
        suma += numero;
        maximo = Math.max(maximo, numero)
        minimo = Math.min(minimo, numero)
    }

    media = suma / numeros.length;

    document.getElementById("resultado").innerHTML = "La suma de los números es: " + suma + ", La media de los números es: " + media + ", El valor máximo es: " + maximo + ", El valor mínimo: " + minimo;
}

function reiniciar(){
    document.getElementById("numeros").value = ""
    document.getElementById("resultado").innerHTML = ""
}
