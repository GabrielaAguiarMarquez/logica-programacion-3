function resultado() {
    const dato = document.getElementById("dato");
    const mostrar = document.getElementById("mostrar");
    const n = parseInt(dato.value);

    if (n >= 0) {
        const factorial = calcular(n);
        mostrar.textContent = ("El factorial de " + n + " es " + factorial);
    } else {
        alert("Por fa, ingresa un dato que sea valido")
    }
}

function calcular(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcular(n - 1);
    }
}