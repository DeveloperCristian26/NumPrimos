function esPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function primosMenoresQue(n) {
    const primos = [];
    for (let i = 2; i < n; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function mostrarPrimos() {
    const numero = parseInt(document.getElementById('numero').value, 10);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(numero)) {
        resultDiv.textContent = 'Por favor, introduce un número válido.';
        return;
    }

    if (!esPrimo(numero)) {
        resultDiv.textContent = `${numero} no es un número primo.`;
        return;
    }

    const primos = primosMenoresQue(numero);
    resultDiv.textContent = `Números primos menores que ${numero}: ${primos.join(', ')}`;
}